import express from "express";
import UserRouter from "./UserRouter/index.js";
import jobRouter from "./jobRouter/index.js";
import Persondetails from "./Persondetails/index.js";
import ProfileRouter from "./ProfileRouter/index.js";
import ChatRouter from "./ChatRouter/index.js";
import routerr from "../middleware/passport.js";

const router = express.Router();

router.use("/user", UserRouter);
router.use("/user/job", jobRouter);
router.use("/user/person", Persondetails);
router.use("/user/profile", ProfileRouter);
router.use("/user/chat", ChatRouter);
router.use("/pass", routerr);

export default router;
