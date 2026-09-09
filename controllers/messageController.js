const NotFoundError = require("../errors/NotFoundError");
const Message = require("../models/messageModel");

const getAllMessages = async (req, res, next) => {
  const messages = await Message.getAll();
  res.render("index", { messages });
};

const createMessage = async (req, res) => {
  const text = req.body.text;
  const user = req.body.user;
  const date = req.body.date;

  if (!date || !text || !user || text.trim() === "" || user.trim() === "") {
    return res.status(400).render("new", {
      error: "User, message and date are required.",
    });
  }

  await Message.addMessage(text, user, date);

  res.redirect("/");
};

const getOneMessage = async (req, res) => {
  const id = req.params.id;
  const myMessage = await Message.getById(id);
  if (!myMessage) {
    throw new NotFoundError("Message Not Found");
  }
  res.render("message", { message: myMessage });
};

module.exports = { getAllMessages, createMessage, getOneMessage };
