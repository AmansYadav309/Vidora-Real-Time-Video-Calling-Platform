 import httpStatus from "http-status";
 import {User} from "../models/user.models.js"
 import bcrypt from "bcrypt"
 import crypto from "crypto"





const register = async ( req,res,next ) =>{
      try {
           const {name , username , password } = req.body;
           if( !name || !username || !password ){
            return res.status(httpStatus.NOT_ACCEPTABLE).json({message : "name , password, and username are required"});
           }
           const exestingUser = await User.findOne({username});
           if(exestingUser){
            return res.status(httpStatus.CONFLICT).json({message : "User already exists"} );
           }
           const hashPassword = await bcrypt.hash(password , 8);
           const newUser = new User({
             name : name , 
             username : username , 
             password : hashPassword 
           })

           await newUser.save();
           res.status(httpStatus.OK).json({message :"User Register sussfullly"}); 
      } catch (error) {
        res.json({message :`Somthing wents wrong ${error} `});
      }
}

const login = async(req,res) =>{ 
    const {username , password } = req.body;
    if(!username || !password) { 
        return res.status(httpStatus.NOT_ACCEPTABLE).json({message : " password and  username are required"})
    }
   try {   
          const user = await User.findOne({username});
          if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message : " User not found "})
          }
           if( await  bcrypt.compare(password , user.password)){
            let token = crypto.randomBytes(20).toString("hex");

            user.token = token;
            await user.save();
            return res.status(httpStatus.OK).json({message : " User Login Sussefully "})
           }
   } catch (error) {
       return res.json({message :  `Somthing wents wrong ${error}`})
   }
}


export {register , login } ; 