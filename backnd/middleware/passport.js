// var express = require('express');
// var passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth20');
// var db = require('../db');

// // Configure the Facebook strategy for use by Passport.
// //
// // OAuth 2.0-based strategies require a `verify` function which receives the
// // credential (`accessToken`) for accessing the Facebook API on the user's
// // behalf, along with the user's profile.  The function must invoke `cb`
// // with a user object, which will be set at `req.user` in route handlers after
// // authentication.
// passport.use(new GoogleStrategy({
//   clientID: process.env['GOOGLE_CLIENT_ID'],
//   clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
//   callbackURL: '/oauth2/redirect/google',
//   scope: [ 'profile' ],
//   state: true
// },
// function(accessToken, refreshToken, profile, cb) {
//   db.get('SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?', [
//     'https://accounts.google.com',
//     profile.id
//   ], function(err, row) {
//     if (err) { return cb(err); }
//     if (!row) {
//       db.run('INSERT INTO users (name) VALUES (?)', [
//         profile.displayName
//       ], function(err) {
//         if (err) { return cb(err); }
//         var id = this.lastID;
//         db.run('INSERT INTO federated_credentials (user_id, provider, subject) VALUES (?, ?, ?)', [
//           id,
//           'https://accounts.google.com',
//           profile.id
//         ], function(err) {
//           if (err) { return cb(err); }
//           var user = {
//             id: id,
//             name: profile.displayName
//           };
//           return cb(null, user);
//         });
//       });
//     } else {
//       db.get('SELECT rowid AS id, * FROM users WHERE rowid = ?', [ row.user_id ], function(err, row) {
//         if (err) { return cb(err); }
//         if (!row) { return cb(null, false); }
//         return cb(null, row);
//       });
//     }
//   });
// }));

// // Configure Passport authenticated session persistence.
// //
// // In order to restore authentication state across HTTP requests, Passport needs
// // to serialize users into and deserialize users out of the session.  In a
// // production-quality application, this would typically be as simple as
// // supplying the user ID when serializing, and querying the user record by ID
// // from the database when deserializing.  However, due to the fact that this
// // example does not have a database, the complete Facebook profile is serialized
// // and deserialized.
// passport.serializeUser(function(user, cb) {
//   process.nextTick(function() {
//     cb(null, { id: user.id, username: user.username, name: user.name });
//   });
// });

// passport.deserializeUser(function(user, cb) {
//   process.nextTick(function() {
//     return cb(null, user);
//   });
// });

// var router = express.Router();

// /* GET /login
//  *
//  * This route prompts the user to log in.
//  *
//  * The 'login' view renders an HTML page, which contain a button prompting the
//  * user to sign in with Google.  When the user clicks this button, a request
//  * will be sent to the `GET /login/federated/accounts.google.com` route.
//  */
// router.get('/login', function(req, res, next) {
//   res.render('login');
// });

// /* GET /login/federated/accounts.google.com
//  *
//  * This route redirects the user to Google, where they will authenticate.
//  *
//  * Signing in with Google is implemented using OAuth 2.0.  This route initiates
//  * an OAuth 2.0 flow by redirecting the user to Google's identity server at
//  * 'https://accounts.google.com'.  Once there, Google will authenticate the user
//  * and obtain their consent to release identity information to this app.
//  *
//  * Once Google has completed their interaction with the user, the user will be
//  * redirected back to the app at `GET /oauth2/redirect/accounts.google.com`.
//  */
// router.get('/login/federated/google', passport.authenticate('google'));

// /*
//     This route completes the authentication sequence when Google redirects the
//     user back to the application.  When a new user signs in, a user account is
//     automatically created and their Google account is linked.  When an existing
//     user returns, they are signed in to their linked account.
// */
// router.get('/oauth2/redirect/google', passport.authenticate('google', {
//   successReturnToOrRedirect: '/',
//   failureRedirect: '/login'
// }));

// /* POST /logout
//  *
//  * This route logs the user out.
//  */
// router.post('/logout', function(req, res, next) {
//   req.logout();
//   res.redirect('/');
// });

// module.exports = router;

// /////////////
// // import express from "express";
// const express = require("express");
// const passport = require("passport");

// const GoogleStrategy = require("passport-google-oidc");

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env["GOOGLE_CLIENT_ID"],
//       clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
//       callbackURL: "/oauth2/redirect/google",
//       scope: ["profile"],
//     },
//     function verify(issuer, profile, cb) {
//       db.get(
//         "SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?",
//         [issuer, profile.id],
//         function (err, row) {
//           if (err) {
//             return cb(err);
//           }
//           if (!row) {
//             db.run(
//               "INSERT INTO users (name) VALUES (?)",
//               [profile.displayName],
//               function (err) {
//                 if (err) {
//                   return cb(err);
//                 }

//                 var id = this.lastID;
//                 db.run(
//                   "INSERT INTO federated_credentials (user_id, provider, subject) VALUES (?, ?, ?)",
//                   [id, issuer, profile.id],
//                   function (err) {
//                     if (err) {
//                       return cb(err);
//                     }
//                     var user = {
//                       id: id,
//                       name: profile.displayName,
//                     };
//                     return cb(null, user);
//                   }
//                 );
//               }
//             );
//           } else {
//             db.get(
//               "SELECT * FROM users WHERE id = ?",
//               [row.user_id],
//               function (err, row) {
//                 if (err) {
//                   return cb(err);
//                 }
//                 if (!row) {
//                   return cb(null, false);
//                 }
//                 return cb(null, row);
//               }
//             );
//           }
//         }
//       );
//     }
//   )
// );
// passport.serializeUser(function (user, cb) {
//   process.nextTick(function () {
//     cb(null, { id: user.id, username: user.username, name: user.name });
//   });
// });
// passport.deserializeUser(function (user, cb) {
//   process.nextTick(function () {
//     return cb(null, user);
//   });
// });
// const db = require("../db");

// const router = express.Router();

// router.get("/login", function (req, res, next) {
//   res.render("login");
// });
// router.get("/login/federated/google", passport.authenticate("google"));
// router.get(
//   "/oauth2/redirect/google",
//   passport.authenticate("google", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//   })
// );
// router.post("/logout", function (req, res, next) {
//   req.logout(function (err) {
//     if (err) {
//       return next(err);
//     }
//     res.redirect("/");
//   });
// });

// module.exports = router;
// index.js or app.js

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();
const port = 2300;

// Session middleware
app.use(
  session({
    secret: "your_session_secret",
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Configure Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: "your_client_id",
      clientSecret: "your_client_secret",
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // This function is called after successful authentication
      // Use profile info (e.g., profile.id) to check if user is in your database
      // Example: findOrCreateUser(profile, done);
      return done(null, profile);
    }
  )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

app.get("/profile", (req, res) => {
  res.send(req.user); // Access authenticated user information
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
