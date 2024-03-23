const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRouter = require('./routes/userRouter');
const noteRouter = require("./routes/noteRouter")

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/api/notes", noteRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});

// cpnnrct to mongodb
const URI = process.env.MONGODB_URL;
try {
    mongoose.connect(URI);
    console.log("Connection Successfull");
} catch (error) {
    console.log(error);
}
