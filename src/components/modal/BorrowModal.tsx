import React, { useEffect, useRef } from "react";
import { useCreateBorrowMutation } from "../../store/apiSlice";
import Swal from "sweetalert2";

interface BorrowModalProps {
  bookId: string;
  onClose: () => void;
}

function BorrowModal({ bookId, onClose }: BorrowModalProps) {
  const [createBorrow] = useCreateBorrowMutation();
  const modalRef = useRef<HTMLDialogElement>(null);

  // Open modal when component mounts
  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dueDate = formData.get("dueDate") as string;
    const quantity = Number(formData.get("quantity"));

    try {
      await createBorrow({
        book: bookId,
        quantity,
        dueDate: new Date(dueDate).toISOString(),
      }).unwrap();

       await Swal.fire({
      icon: "success",
      title: "Borrow Successful!",
      text: `You have borrowed ${quantity} book(s).`,
      confirmButtonText: "OK",
    });
    onClose();
      handleClose();
    } catch (err) {
       await Swal.fire({
      icon: "error",
      title: "Borrow Failed",
      text: "Something went wrong. Please try again.",
      confirmButtonText: "OK",
    });
      console.error("Borrow failed:", err);
    }
  };

  const handleClose = () => {
    modalRef.current?.close();
    onClose(); // notify parent to remove modal
  };

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Borrow Book</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Due Date</label>
            <input
              type="date"
              name="dueDate"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              min={1}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" className="btn" onClick={handleClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default BorrowModal;
