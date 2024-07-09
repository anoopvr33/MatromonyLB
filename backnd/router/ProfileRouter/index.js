import express from "express";
import User from "../../db/Schema/UserSchema.js";
import Profile from "../../db/Schema/UserProfile.js";

const router = express.Router();

router.get("/profile/landing", async (req, res) => {
  //   const { id } = req.params; //User id
  const user = await Profile.find().populate(["user", "reg", "job"]); //User id
  // user.password = "";
  res.status(200).json(user);
});

//Filter by location
router.post("/profile/location", async (req, res) => {
  const body = { ...req.body };
  const form = await Profile.find({
    address: body.address,
  }).populate(["user", "reg", "job"]);
  // user.password = "";
  res.status(200).json(form);
});

//Filter by Name
router.post("/profile/name", async (req, res) => {
  const body = { ...req.body };
  const userid = await User.find({ name: body.name });
  const us = await Profile.find({
    user: userid,
    address: body.address,
  }).populate(["user", "job", "reg"]);

  // if (body.name == userid) return res.json(form);
  // if (body.name == userid.user && userid.user.name)
  // user.password = "";
  res.status(200).json(us);
});

export default router;
