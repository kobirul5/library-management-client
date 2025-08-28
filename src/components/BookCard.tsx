import { BookOpen, Copy, User } from "lucide-react"
import EditBookModal from "./modal/EditBookModal"
import type { IBook } from "./AllBooks"
import { useState } from "react";
import { useDeleteBooksMutation } from "../store/apiSlice";
import Swal from "sweetalert2";
import BorrowModal from "./modal/BorrowModal";

interface BookCardProps {
    book: IBook
}


export function BookCard({ book }: BookCardProps) {

    const [openModalFor, setOpenModalFor] = useState<string | null>(null)

    const [selectedBook, setSelectedBook] = useState<IBook | null>(null);
    const [deleteBook] = useDeleteBooksMutation();


    const handleDelete = async (id: string) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won’t be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                 await deleteBook(id).unwrap();
                Swal.fire("Deleted!", "The book has been deleted.", "success");
            } catch (error) {
                Swal.fire("Error!", "Something went wrong while deleting.", "error");
            }
        }
    };

    return (
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow hover:shadow-md transition ">
            {/* Left Section */}
            <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">{book.title}</h3>
                    <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${book.available
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                            }`}
                    >
                        {book.available ? "Available" : "Unavailable"}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User className="h-4 w-4" />
                    <span>{book.author}</span>
                </div>

                <p className="text-sm text-gray-700 line-clamp-3">{book.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-500">ISBN:</span>
                        <span className="font-mono text-xs">{book.isbn}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Copy className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-500">Copies:</span>
                        <span className="font-semibold">{book.copies}</span>
                    </div>
                </div>

                <span className="inline-block px-3 py-1 text-xs font-medium border rounded-md text-cyan-700 border-cyan-200 bg-cyan-50">
                    {book.genre}
                </span>
            </div>

            {/* Right Section */}
            <div className="flex flex-row gap-2 shrink-0">


                <button
                    disabled={!book.available}
                    onClick={() => setOpenModalFor(book._id)}
                    className="px-4 py-2 rounded-md shadow text-sm font-medium transition btn"
                >
                    Borrow
                </button>

                {openModalFor === book._id && (
                    <BorrowModal
                        bookId={book._id}
                        onClose={() => setOpenModalFor(null)}
                    />
                )}

                {/* <BorrowModal modalId={`borrow_modal_${book._id}`} bookId={book._id} /> */}
                <button
                    className="px-4 py-2 rounded-md shadow text-sm font-medium text-gray-700 hover:bg-gray-100"
                    onClick={() => setSelectedBook(book)}
                >
                    Edit
                </button>
                {selectedBook && (
                    <EditBookModal
                        book={selectedBook}
                        onClose={() => setSelectedBook(null)}
                    />
                )}
                <button
                    onClick={() => handleDelete(book._id)}
                    className="px-4 py-2 rounded-md shadow  text-sm font-medium text-gray-700 hover:bg-gray-100 bg-red-300">
                    Delete
                </button>
            </div>
        </div>
    )
}
