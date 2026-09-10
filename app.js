const path = require("node:path");
const MessageController = require('./controllers/messageController')
const MessageModel = require('./models/messageModel')

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = require("process").env.PORT || 8080;

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const messageRepo = new MessageModel()
const messageController = new MessageController(messageRepo)

app.get("/", messageController.getAllMessages);
app.get("/message/:id", messageController.getOneMessage);
app.get("/new", (req, res) => res.render("new", { error: null }));
app.post("/new", messageController.createMessage);

app.use((err, req, res, next) => {
  console.error(err.name);
  const status = err.status || 500;

  return res.status(status).render("error", { message: err.message });
});
app.listen(PORT, () => console.log("started the server on: " + PORT));
