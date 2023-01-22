import express, { Request, Response } from "express";
import { User } from "../../models/user";
import { Token } from "../../models/token";
import nodemailer from "nodemailer";
import crypto from "crypto";
import { NotAuthorizedError } from "@niftickets/common";

const router = express.Router();

router.post("/api/auth/forgot", async (req: Request, res: Response) => {
  // Search for a user with the provided email address
  const existingUser = await User.findOne({ email: req.body.email });

  if (!existingUser) {
    // If no user is found, redirect to an error page
    return new NotAuthorizedError();
  }

  // Otherwise, generate a password reset token
  const token = crypto.randomBytes(32).toString("hex");

  const newToken = Token.build({
    userId: existingUser._id,
    token: token,
    createdAt: new Date(Date.now()),
  });
  await newToken.save();
  console.log(newToken);

  // Send an email to the user with the password reset link
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // use your SMTP host
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.USER_EMAIL, // generated ethereal user
      pass: process.env.USER_PASSWORD, // generated ethereal password
    },
  });
  let mailOptions = {
    from: process.env.USER_EMAIL,
    to: existingUser.email,
    subject: "Password reset",
    text:
      "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
      "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
      "http://" +
      req.headers.host +
      "/api/auth/reset/" +
      token +
      "\n\n" +
      "If you did not request this, please ignore this email and your password will remain unchanged.\n",
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.status(201).send("Email sent");
});

export { router as forgotPasswordRouter };
