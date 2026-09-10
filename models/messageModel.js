const uuid = require("uuid");
const NotFoundError = require("../errors/NotFoundError");

class MessageModel {
  #messages = [
    {
      id: uuid.v4(),
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
    },
    {
      id: uuid.v4(),
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
    },
  ];
  
  getAll = async () => this.#messages;
  
  getById = async (id) => {
    const message = this.#messages.find((item) => item.id === id);
    if (!message) throw new NotFoundError("There's no message with this id.")
    return message;
  }
  
  addMessage = async (text, user, date) => {
    const message = { id: uuid.v4(), text, user, added: new Date(date) };
    this.#messages.push(message);
  };
}

module.exports = MessageModel;
