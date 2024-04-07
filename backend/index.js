import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
const app = express();

app.use(express.json());
// Get Methods
app.get("/", (request, response) => {
  console.log("Running");
  console.log(request);
  response.status(200).send({ message: "Hello World!" });
});

app.use('/books', booksRoute)



// Mongodb Connection

mongoose.connect(mongoDBURL);
try {
  console.log("Mongo db is connected");

  app.listen(PORT, () => {
    console.log("App is Running on the Port ", PORT);
  });
} catch (error) {
  console.log(error);
}
