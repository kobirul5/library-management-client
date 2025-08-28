import React, { useState } from "react";
import { useCreateBookMutation } from "../../store/apiSlice";
import Swal from "sweetalert2";

function AddBook() {
    const [createBook]= useCreateBookMutation()

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: "",
    available: false,
  });

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

try {
        await createBook(book).unwrap();
      Swal.fire({
        title: "✅ Success!",
        text: "Book added successfully!",
        icon: "success",
        confirmButtonColor: "#2563eb", 
      })
    } catch (error:any) {
      Swal.fire({
        title: "❌ Error!",
        text: error?.data?.message || "Failed to add book",
        icon: "error",
        confirmButtonColor: "#dc2626", 
      });
      console.error(error);
    }


    setBook({
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: "",
      available: false,
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 my-10 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block font-medium">Author</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block font-medium">Genre</label>
          <input
            type="text"
            name="genre"
            value={book.genre}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* ISBN */}
        <div>
          <label className="block font-medium">ISBN</label>
          <input
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          ></textarea>
        </div>

        {/* Copies */}
        <div>
          <label className="block font-medium">Copies</label>
          <input
            type="number"
            name="copies"
            value={book.copies}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Available */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="available"
            checked={book.available}
            onChange={handleChange}
            className="mr-2"
          />
          <label>Available</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#00d3bb] text-white py-2 rounded hover:bg-[#00d3bacb]"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
