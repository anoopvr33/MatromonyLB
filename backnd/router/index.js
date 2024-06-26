import express from "express";
import UserRouter from "./UserRouter/index.js";

const router = express.Router();

// router.get("/hai", (req, res) => {
//   res.json({ message: "haloo" });
// });
router.use("/user", UserRouter);

export default router;
