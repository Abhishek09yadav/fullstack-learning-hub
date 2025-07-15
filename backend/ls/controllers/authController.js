import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Users from "../models/Users.js";
import { hashPassword, comparePassword } from "../utils/hashPassword.js";

const genToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "please fill all information" });
  }
  try {
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
    }
    const UserPass = await hashPassword(password);
    const user = new Users({
      fullName,
      email,
      password: UserPass,
    });
    const token = genToken(user._id)
    await user.save();

    return res.status(201).json({
      user,
      token,
    });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await Users.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "no user found with that email" });
    }
    const verifyPassword = await comparePassword(
      password,
      existingUser.password
    );
    if (!verifyPassword) {
      return res.status(401).json({ message: "wrong password" });
    }
    const token =  genToken(existingUser._id);
    return  res.status(200).json({
      message: "logged in successfully",
      userDetails: {
        id: existingUser._id,
        fullname: existingUser.fullName,
        email: existingUser.email,
        phone: existingUser.phone,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
