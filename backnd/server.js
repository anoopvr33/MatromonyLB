import express from "express";
import mongoose from "./db/db.js";
import router from "./router/index.js";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import session from "express-session";
import passport from "passport";

const app = express();

dotenv.config({ path: "./.env" });

app.use(express.json());
app.use(cors());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.authenticate("session"));

app.use(router);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (dat) => {
    io.emit("receive_message", dat);
    // const msg = { user: "other", msg: dat.msg };
    // io.emit("receive_message", msg);
    console.log(dat);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

// app.use("*", (req, res) => {
//   res.status(404).json({ message: "route not found" });
// });

app.get("*", (req, res) => {
  res.json("route not found");
});

server.listen(1400, () => {
  console.log("run at 1400");
});
