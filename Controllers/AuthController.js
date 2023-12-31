
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Models/UserModel");
const dotenv = require('dotenv');

dotenv.config();

const generateToken = (user) => {
    return jwt.sign({ id_user: user.id_user, email: user.email }, process.env.SECRET_TOKEN);
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ where: { email :email} });

    if (!user) {
      let response ={ error: "Email Salah" }
      return res.status(404).json(response);
    }

    const macth = await bcrypt.compare(password,user.password)
    
    if (!macth) {
      let response ={ error: "password salah" }
      return res.status(401).json(response);
    }

    const token = generateToken(user);
    let response ={
      token : token,
      message:"login succes",
      user :user
    }

    res.setHeader('authorization',token)
    res.status(200).json( response );
  } catch (error) {
    console.error(error);
    let response ={
     error : "Internal Server Error"
    }
    return res.status(500).json(response);
  }
};


// JWT

const getProfile = async (req, res) => {

  try {
    const { user_id } = req.user;
    const user = await User.findOne({ where: { user_id: user_id } });

    if (!user) {
      return res.status(400).json({ message: "tidak ketemu" });
    }
    let response = {
      user: user,
    };

    console.log(response);
    res.status(200).json({ response });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "KACIAN ERROR" });
  }
};


const logout = async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]
    
  console.log(token)
};


module.exports = {
  login,
  getProfile,
  logout,
};