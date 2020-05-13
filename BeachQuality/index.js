const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require('passport');

const port = process.env.PORT || 4000 || 5000;

// API
const beachRouter = require("./routes/api/beach");
const userRouter = require("./routes/api/user");

const server = express();

// Middleware
// Bodyparser Middleware
server.use(
  bodyParser.urlencoded({
    extended: false
  })
);
server.use(bodyParser.json());
server.use(cors());

// Passport config
require('./services/config/passport')(passport)

// DB config
const db = require("./services/config/mongo").mongoURI;

// connect to MongoDB Atlas database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("connected to database"))
  .catch(err => console.log(err));

// Use Routes
server.use("/api/beach", beachRouter);
server.use("/api/user", userRouter);

server.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR BACKEND IS CONNECTED TO REACT" });
});
server.listen(port, () => {
  console.log(`now listening for requests on port: ${port}`);
});
