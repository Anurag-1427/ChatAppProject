import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { cookieOptions, sendToken } from "../utils/features.js";
import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";

//Create a new user and save it to database and save token in cookie
const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;

  const avatar = {
    public_id: "sdffdfdfd",
    url: "sfsdfjdkj",
  };
  const user = await User.create({
    name,
    username,
    password,
    bio,
    avatar,
  });
  // res.status(201).json({ message: "User created successfully" });
  sendToken(res, user, 201, "User created");
};

// Login user and save token in cookie
const login = TryCatch(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");
  if (!user) return next(new ErrorHandler("Invalid Username or Password", 404));

  const isPasswordMatch = await compare(password, user.password);
  if (!isPasswordMatch) return next(new ErrorHandler("Invalid Password", 404));

  sendToken(res, user, 200, `Welcome back, ${user.name}`);
});

const getMyProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user);

  res.status(200).json({
    success: true,
    user,
  });
});

const logout = TryCatch(async (req, res) => {
  return res
    .status(200)
    .cookie("chatApp-token", "", { ...cookieOptions, maxAge: 0 })
    .json({
      success: true,
      message: "Logged out successfully",
    });
});

const searchUser = TryCatch(async (req, res) => {
  const { name } = req.query;

  return res.status(200).json({
    success: true,
    message: JSON.parse(name),
  });
});

export { login, newUser, getMyProfile, logout, searchUser };
