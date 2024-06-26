import express from 'express';
import {Book} from "../models/bookModel.js";
const router = express.Router();
// Get All books
router.get("/", async (request, response) => {
    try{
        const books = await Book.find({})
        response.status(200).json(books)
    }
    catch(err){
        console.log(err)
        response.status(500).send({message: err.message})
    }
})


// Get Single book by id from mongoose
router.get("/:id", async (request, response) => {
    try{
        const {id} = request.params;
        const book = await Book.findById(id)
        response.status(200).json(book)
    }
    catch(err){
        console.log(err)
        response.status(500).send({message: err.message})
    }
})


//Save a new Book : with Post Method
router.post("/", async (request, response) => {
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


//Update a new Book : with Put method by id
router.put("/:id", async (request, response) => {
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
     
      const {id} = request.params;
      const result = await Book.findByIdAndUpdate(id, request.body)

      if (!result) {
        return response.status(404).send({message:"Book Not Found"})
      }
      return response.status(200).send({message:"Book Updated Successfully"})
      
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  
// Delete single book by Delete method
router.delete("/:id", async (request, response) => {
try{
    const {id} = request.params;

    const result = await Book.findByIdAndDelete(id);
if (!result) {
    return response.status(404).json({message:"Book not found"})
}
return response.status(200).json({message:"Book Deleted successfully"})
}catch (error) {

}console.log(error.message)
return response.status(500).send({message:error.message});
})


export default router;