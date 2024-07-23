// var express = require("express");
import express from "express";
// var passport = require('passport');
// var GoogleStrategy = require('passport-google-oidc');
import passport from "passport";
import GoogleStrategy from "passport-google-oidc";
import dotenv from "dotenv";
// import User from "../db/schema/User.js";
import User from "../db/Schema/UserSchema.js";
// import UserLog from "./UserLog/index.js";
dotenv.config({ path: "./.env" });

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env["GOOGLE_CLIENT_ID"],
      clientSecret: process.env["GOOGLE_CLIENT_SECRET"],

      callbackURL: "http://localhost:5173/login",
      scope: ["profile"],
    },
    // console.log("hai"),
    async (accessToken, refreshToken, profile, done) => {
      //   Check if user already exists in the database
      console.log("hai", profile);
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      //   Create new user if not exists
      const newUser = new User({
        googleId: profile.id,
        displayName: profile.displayName,
        // Add more fields as needed
      });

      await newUser.save();
      done(null, newUser);
    }
  )
);
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

const routerr = express.Router();

// router.use("/login", UserLog);
routerr.get("/login/federated/google", passport.authenticate("google"));
routerr.get(
  `http://localhost:5173/login`,
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/landing",
  })
);

export default routerr;

// // app.js (or index.js)

// const express = require('express');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// // Initialize express
// const app = express();

// // MongoDB connection
// mongoose.connect('mongodb://localhost/google-auth-example', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Define a user schema
// const userSchema = new mongoose.Schema({
//   googleId: String,
//   displayName: String,
//   // Add more fields as needed
// });

// const User = mongoose.model('User', userSchema);

// // Configure express-session middleware
// app.use(session({
//   secret: 'your_secret_key',
//   resave: false,
//   saveUninitialized: true
// }));

// // Configure Passport to use Google OAuth2.0
// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: '/auth/google/callback'
//   },
//   async (accessToken, refreshToken, profile, done) => {
//     // Check if user already exists in the database
//     const existingUser = await User.findOne({ googleId: profile.id });

//     if (existingUser) {
//       return done(null, existingUser);
//     }

//     // Create new user if not exists
//     const newUser = new User({
//       googleId: profile.id,
//       displayName: profile.displayName
//       // Add more fields as needed
//     });

//     await newUser.save();
//     done(null, newUser);
//   }
// ));

// // Configure Passport session serialization
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

// // Initialize Passport and restore authentication state, if any, from the session
// app.use(passport.initialize());
// app.use(passport.session());

// // Define routes
// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] }));

// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   (req, res) => {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

// // Example protected route
// app.get('/profile',
//   require('connect-ensure-login').ensureLoggedIn(),
//   (req, res) => {
//     res.send(req.user);
//   });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
