import { useGetAllBooksQuery } from "../store/apiSlice"
import { BookCard } from "./BookCard" 


export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: "FANTASY" | "SCIENCE" | "FICTION" | "HISTORY" | "ROMANCE" | string; 
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
  createdAt: string; // or Date if you parse it
  updatedAt: string; // or Date if you parse it
}


function AllBooks() {

const { data : books = [] , error, isLoading } = useGetAllBooksQuery(undefined);

console.log(books);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;


  return (
    <div className="p-6  mx-auto">
      <h1 className="text-2xl font-bold mb-6">All Books</h1>

      <div className="space-y-4 grid grid-cols-4 gap-5">
        {books.data.map((book:IBook) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default AllBooks
