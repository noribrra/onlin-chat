import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import { getreciverid, io } from "../socket/socket.js";
export const sendmessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newmessage = new Message({
      senderId,
      receiverId,
      message,
    });

    await newmessage.save();
    await Conversation.findByIdAndUpdate(conversation._id, {
      $push: { messages: newmessage._id },
    });
    //  Socket.io
    const receiversocketid = getreciverid(receiverId);

    if (receiversocketid) {
      io.to(receiversocketid).emit("newmessage", newmessage);
    }

    res.status(200).json(newmessage);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "invaled server error" });
  }
};

export const getmessages = async (req, res) => {
  try {
    const { id: usertochatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, usertochatId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }
    res.status(200).json(conversation.messages);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "invaled server error" });
  }
};
