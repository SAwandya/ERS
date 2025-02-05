const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");
const user = require("./routes/user");
const interview = require("./routes/interview");
const scheme = require("./routes/scheme");
const shedule = require("./routes/shedule");
const supervisor = require("./routes/supervisor");
const assignment = require("./routes/assignment");
const auth = require("./routes/auth");
const cv = require("./routes/cv");

const mongo_url = process.env.MONGO_URL;

mongoose
  .connect(mongo_url)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(
  session({
    secret: "Awandya2000#",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === "production" },
  })
);

app.use("/api/user", user);
app.use("/api/cv", cv)
app.use("/api/interview", interview);
app.use("/api/scheme", scheme);
app.use("/api/schedule", shedule);
app.use("/api/supervisor", supervisor);
app.use("/api/assignment", assignment);
app.use("/api/auth", auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
