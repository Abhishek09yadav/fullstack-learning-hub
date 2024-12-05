const HttpError = require("../models/http-error");
const {v4: uuid4} = require('uuid')
const DUMMY_USERS = [{
    id: "u1",
    name:"Abhishek",
    email:"123@gmail.com",
    password:"123"

}]
const getUsers = (req,res,next)=>{
    res.json({DUMMY_USERS})
  
}
const signup = (req,res,next)=>{
    const {userName,email,password} = req.body;
    const createUser  = {
        id:uuid4(),userName, password, email
    }
    const UserExist = DUMMY_USERS.find(u => u.email === email);
    if(UserExist){
        return res.status(401).send({message: "user Exists please login"});
    }
    DUMMY_USERS.push(createUser);
    res.status(201).json({DUMMY_USERS})
}
const login = (req,res,next) =>{
    const {email,password} = req.body;
    const identifiedUser =
    DUMMY_USERS.find(p =>{
       return p.email === email && p.password === password
    })
    if (!identifiedUser){
     return  res.status(401).json({message:"invalid username or password"});
    }
    res.status(200).json({message:"Login successful!", user: identifiedUser})
}


exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
