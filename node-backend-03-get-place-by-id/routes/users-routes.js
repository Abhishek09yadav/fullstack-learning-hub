const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log("get req in users");
    res.json({
        message:"welcome to user's route"
    });
    
});
module.exports= router;
