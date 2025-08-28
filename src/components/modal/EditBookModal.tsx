import { useState } from "react";
import type { IBook } from "../AllBooks";
import { useUpdateBooksMutation } from "../../store/apiSlice";

interface EditBookModalProps {
  book: IBook;
  onClose: () => void;
}

function EditBookModal({ book, onClose }: EditBookModalProps) {
  const [formData, setFormData] = useState(book);
  const [updateBook, { isLoading }] = useUpdateBooksMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateBook(formData).unwrap(); // API call
      onClose();
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  return (
    <div className="modal modal-open" role="dialog">
      <div className="modal-box">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Author"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">ISBN</label>
            <input
              type="text"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              placeholder="ISBN"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Copies</label>
            <input
              type="number"
              name="copies"
              value={formData.copies}
              onChange={handleChange}
              placeholder="Total Copies"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="textarea textarea-bordered w-full"
            />
          </div>

          <div className="modal-action">
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn bg-[#00d3bb]" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBookModal;
