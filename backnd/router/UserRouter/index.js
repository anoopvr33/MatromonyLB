import User from "../../db/Schema/UserSchema.js";
import Profile from "../../db/Schema/UserproShema.js";
import express from "express";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = { ...req.body };
  const isUser = await User.findOne({ username: body.username });
  if (isUser) {
    return res.json("username already taken");
  }
  if (body.password != body.confirmPassword) {
    return res.json("password not match");
  }
  const userData = await User.create(body);
  res.json(userData);
});

router.post("/login", async (req, res) => {
  const body = { ...req.body };
  const prof = await User.findOne({ username: body.username });
  if (!prof) {
    return res.json("username not found");
  } else if (body.password != prof.password) {
    return res.json("password correct");
  } else {
    res.json("login success");
  }
});

router.post("/profile", async (req, res) => {
  const body = { ...req.body };
  const pro = await Profile.create(body);
  res.json(pro);
});

export default router;
