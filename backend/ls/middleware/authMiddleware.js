import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const authMiddleware = (req,res,next)=>{
  const {token} = req.headers;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  } 
  

}