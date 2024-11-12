import jwt from "jsonwebtoken";

const cookieOptions = {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: false, // true, if goes to production otherwise do not pass cookies to protected routes
};

const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  console.log(`sendToken's token ====>`, token);

  return res.status(code).cookie("chatApp-token", token, cookieOptions).json({
    success: true,
    user,
    message,
  });
};

const emitEvent = (req, event, users, data) => {
  console.log("Emitting event: ", event);
};

export { sendToken, cookieOptions, emitEvent };
