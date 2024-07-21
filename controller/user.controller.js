const User = require("../models/user");
const bcrypt = require("bcrypt");
const db = require('../services/database')


const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({email})
  console.log(existingUser)
  if (existingUser) {
    return res.status(400).json({ code: 1, message: 'User already exists' });
  }
  else{
    try {
      console.log(username, email, password);
      const sqpassword = await bcrypt.hash(password,10);

      const newuser = new User({
        name: username ,
        email,
        password: sqpassword,
      });
      await newuser.save()
      return res.status(200).json({ code: 0, message: 'user created sucessfully' });

    } catch (error) {
      return res.status(500).json({ code: 2, message: 'Unable to create user' });
    }
  }
  
};

const login = async (req,res)=>{
  const {email, password} = req.body;
  console.log(email,password)
  const userexists = await User.findOne({email})
  if(!userexists){
    return res.status(400).json({ code:1,message:'User Not found'});
    console.log('user not found');
  }
  const check_pass = await bcrypt.compare(password,userexists.password);

  if(!check_pass){
    return res.status(201).json({ code:2,message:'invalid password'})
    console.log('invalid password')
  }
  return res.status(200).json({code:0 ,message:'login sucessfully' , username: userexists.name})
  console.log('sucesss')
}

module.exports = { signup , login };
