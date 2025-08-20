import { BookCard } from "./BookCard" 

interface Book {
  id: string           
  title: string
  author: string
  genre: string         
  isbn: string
  description: string
  copies: number
  available: boolean   
  createdAt: string
  updatedAt: string
}


function AllBooks() {
  const books : Book[] = [
  {
    id: "68599fdef2055af41700e425",
    title: "The Theory",
    author: "Stephen Hawking",
    genre: "FANTASY",
    isbn: "9780553380163",
    description: "An overview of cosmology and black holes.",
    copies: 16,
    available: false,
    createdAt: "2025-06-23T18:41:34.621Z",
    updatedAt: "2025-06-24T19:58:02.073Z"
  },
  {
    id: "68599ff2f2055af41700e428",
    title: "The Theory",
    author: "Stephen Hawking",
    genre: "FANTASY",
    isbn: "9780553380163",
    description: "An overview of cosmology and black holes.",
    copies: 0,
    available: false,
    createdAt: "2025-06-23T18:41:54.107Z",
    updatedAt: "2025-06-24T16:01:36.490Z"
  },
  {
    id: "68599ff4f2055af41700e42a",
    title: "The Theory",
    author: "Stephen Hawking",
    genre: "FANTASY",
    isbn: "9780553380163",
    description: "An overview of cosmology and black holes.",
    copies: 5,
    available: true,
    createdAt: "2025-06-23T18:41:56.314Z",
    updatedAt: "2025-06-23T18:41:56.314Z"
  },
  {
    id: "68599ff5f2055af41700e42c",
    title: "The Theory",
    author: "Stephen Hawking",
    genre: "FANTASY",
    isbn: "9780553380163",
    description: "An overview of cosmology and black holes.",
    copies: 5,
    available: true,
    createdAt: "2025-06-23T18:41:57.359Z",
    updatedAt: "2025-06-23T18:41:57.359Z"
  },
  {
    id: "68599ff6f2055af41700e42e",
    title: "The Theory",
    author: "Stephen Hawking",
    genre: "FANTASY",
    isbn: "9780553380163",
    description: "An overview of cosmology and black holes.",
    copies: 5,
    available: true,
    createdAt: "2025-06-23T18:41:58.373Z",
    updatedAt: "2025-06-23T18:41:58.373Z"
  },
  {
    id: "68599ff7f2055af41700e430",
    title: "The Theory",
    author: "Stephen Hawking",
    genre: "FANTASY",
    isbn: "9780553380163",
    description: "An overview of cosmology and black holes.",
    copies: 5,
    available: true,
    createdAt: "2025-06-23T18:41:59.287Z",
    updatedAt: "2025-06-23T18:41:59.287Z"
  },
  {
    id: "68599ff8f2055af41700e432",
    title: "The Theory",
    author: "Stephen Hawking",
    genre: "FANTASY",
    isbn: "9780553380163",
    description: "An overview of cosmology and black holes.",
    copies: 2,
    available: true,
    createdAt: "2025-06-23T18:42:00.190Z",
    updatedAt: "2025-06-24T16:00:30.837Z"
  },
  {
    id: "68599ff9f2055af41700e434",
    title: "The Theory",
    author: "Stephen Hawking",
    genre: "FANTASY",
    isbn: "9780553380163",
    description: "An overview of cosmology and black holes.",
    copies: 5,
    available: true,
    createdAt: "2025-06-23T18:42:01.298Z",
    updatedAt: "2025-06-23T18:42:01.298Z"
  },
  {
    id: "68599ffaf2055af41700e436",
    title: "The Theory",
    author: "Stephen Hawking",
    genre: "FANTASY",
    isbn: "9780553380163",
    description: "An overview of cosmology and black holes.",
    copies: 2,
    available: true,
    createdAt: "2025-06-23T18:42:02.192Z",
    updatedAt: "2025-06-24T16:00:58.146Z"
  },
  {
    id: "68599ffbf2055af41700e438",
    title: "The Theory",
    author: "Stephen Hawking",
    genre: "FANTASY",
    isbn: "9780553380163",
    description: "An overview of cosmology and black holes.",
    copies: 5,
    available: true,
    createdAt: "2025-06-23T18:42:03.212Z",
    updatedAt: "2025-06-23T18:42:03.212Z"
  }
]


  return (
    <div className="p-6  mx-auto">
      <h1 className="text-2xl font-bold mb-6">All Books</h1>

      <div className="space-y-4 grid grid-cols-4 gap-5">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default AllBooks
