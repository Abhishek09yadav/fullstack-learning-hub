import express from 'express'
import mongoose from 'mongoose'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'


export const signup = (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    res.status(500).json({ message: "please fill all information" });
  }
  const existingUser = Users.findOne({})


};