import { useParams } from "react-router";
import { useGetBookByIdQuery } from "../../store/apiSlice";


export default function BookDetail() {


  const { id } = useParams<{ id: string }>();

  const { data: book = {} } = useGetBookByIdQuery(id);



  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
        <p className="text-lg text-gray-600 mb-4">by {book.author}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <span className="block text-sm text-gray-500">Genre</span>
            <span className="text-gray-800 font-medium">{book.genre}</span>
          </div>
          <div>
            <span className="block text-sm text-gray-500">ISBN</span>
            <span className="text-gray-800 font-medium">{book.isbn}</span>
          </div>
          <div>
            <span className="block text-sm text-gray-500">Copies</span>
            <span className="text-gray-800 font-medium">{book.copies}</span>
          </div>
          <div>
            <span className="block text-sm text-gray-500">Available</span>
            <span
              className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                book.available
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {book.available ? "Yes" : "No"}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <span className="block text-sm text-gray-500">Description</span>
          <p className="text-gray-700 mt-1">{book.description}</p>
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          <span>
            Created: {new Date(book.createdAt).toLocaleDateString()}{" "}
            {new Date(book.createdAt).toLocaleTimeString()}
          </span>
          <span>
            Updated: {new Date(book.updatedAt).toLocaleDateString()}{" "}
            {new Date(book.updatedAt).toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
}
