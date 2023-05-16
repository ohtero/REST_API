const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();

const {
  getAllEntries,
  getEntryById,
  createEntry,
  updateEntry,
  deleteEntry,
} = require("./controllers/albumController");

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.bc5yosh.mongodb.net/music`
);

app.get("/api/getall", getAllEntries);

app.get("/api/:id", getEntryById);

app.post("/api/add", createEntry);

app.patch("/api/update/:id", updateEntry);

app.delete("/api/delete/:id", deleteEntry);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
