import Chat from "../../db/Schema/ChatList.js";
import express from "express";

const router = express.Router();

router.post("/chatlist", async (req, res) => {
  const body = { ...req.body };
  const chat = await Chat.create(body);
  res.json(chat);
});

router.get("/chatlist/:id", async (req, res) => {
  const { id } = req.params;
  const chat = await Chat.findById(id).populate(["profileId"]);
  res.json(chat);
});
export default router;
