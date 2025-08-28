import { useBorrowSammaryQuery } from "../../store/apiSlice";

function BorrowSamary() {
   const { data, error, isLoading } = useBorrowSammaryQuery(undefined);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error fetching borrow data.</p>;

  return (
     <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">All Borrowed Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.data.map((borrow: any, index: number) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg mb-2">{borrow.book?.title || "Unknown Book"}</h2>
            <p><span className="font-medium">ISBN:</span> {borrow.book?.isbn || "N/A"}</p>
            <p><span className="font-medium">Quantity:</span> {borrow.totalQuantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BorrowSamary