# Mini Message Board

A simple message board web app built with **Node.js**, **Express**, and **EJS**. Users can post short messages with their name and see them listed on the home page.

🔗 **Live Demo:** [message-board.bonto.run](https://message-board.bonto.run/)

## Features

- View a list of all posted messages (name, text, and date)
- Add a new message
- Open a single message to view it in detail

## Tech Stack

- [Express](https://expressjs.com/) – server & routing
- [EJS](https://ejs.co/) – templating engine
- [Tailwind CSS](https://tailwindcss.com/) – styling
- [uuid](https://www.npmjs.com/package/uuid) – unique IDs for each message
- [dotenv](https://www.npmjs.com/package/dotenv) – environment variables
- [nodemon](https://nodemon.io/) – auto-restart during development

## Project Structure

```
message-board/
├── controllers/   # Route handlers / logic
├── errors/        # Error handling
├── models/        # Message data/model
├── public/         # Static files (CSS, JS)
├── views/          # EJS templates
└── app.js          # App entry point
```

## Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/thomasyacoup/message-board.git
   cd message-board
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app**
   ```bash
   npm start
   ```

4. Open your browser at `http://localhost:8080` (or whichever port the app uses).

## License

ISC