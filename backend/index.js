import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
// Get Methods
app.get("/", (request, response) => {
  console.log("Running");
  console.log(request);
  response.status(200).send({ message: "Hello World!" });
});

// Get books
app.get("/books", (request, response) => {
    try{
        response.status(200).send(book)
    }
    catch(err){
        console.log(err)
    }
})


// POST method to Save a new book
app.post("/books", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send All Required Fields : title, author, publishYear",
      });
    }
   
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };
    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});




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
