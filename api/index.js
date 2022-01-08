const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  },
  filename: (req,file,cb)=>{
    // Note: Postman doesn't take req.body when doing form multipart post req
    // You can change req.body.name temporarily to a string value
    // (like filename.png) for testing.
    cb(null, req.body.name);
  }
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoriesRoute);

app.use("/",(req,res) => {
  console.log("hey this is main url")
})

app.listen("4000", ()=> {
  console.log("Backend is running.");
})
