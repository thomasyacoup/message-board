class MessageController {
  constructor(messageRepo) {
    this.repo = messageRepo
  }

  getAllMessages = async (req, res, next) => {
    const messages = await this.repo.getAll();
    res.render("index", { messages });
  };

  getOneMessage = async (req, res, next) => {
    try {
      const id = req.params.id;
      const myMessage = await this.repo.getById(id);
      res.render("message", { message: myMessage });
    } catch (e) {
      next(e)
    }
  };

  createMessage = async (req, res) => {
    const text = req.body.text;
    const user = req.body.user;
    const date = req.body.date;
  
    if (!date || !text || !user || text.trim() === "" || user.trim() === "") {
      return res.status(400).render("new", {
        error: "User, message and date are required.",
      });
    }
  
    await this.repo.addMessage(text, user, date);
    
    res.redirect("/");
  };
}

module.exports = MessageController;
