import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getreciverid = (receiverid) => {
  return usermap[receiverid];
};

const usermap = {};
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId !== "undefinde") usermap[userId] = socket.id;

  io.emit("onlineusers", Object.keys(usermap));
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete usermap[userId];
    io.emit("online users", Object.keys(usermap));
  });
});

export { app, io, server };
