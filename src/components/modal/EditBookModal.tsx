import React from 'react'

function EditBookModal() {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <div className="modal" role="dialog" id="my_modal_8">
                <div className="modal-box">
                    <form className="space-y-3">
                        <input
                            type="text"
                            name="title"
                            //   value={formData.title}
                            //   onChange={handleChange}
                            placeholder="Title"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="text"
                            name="author"
                            //   value={formData.author}
                            //   onChange={handleChange}
                            placeholder="Author"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="text"
                            name="isbn"
                            //   value={formData.isbn}
                            //   onChange={handleChange}
                            placeholder="ISBN"
                            className="input input-bordered w-full"
                        />


                        <input
                            type="number"
                            name="copies"
                            //   value={formData.copies}
                            //   onChange={handleChange}
                            placeholder="Total Copies"
                            className="input input-bordered w-full"
                        />

                        <textarea
                            name="description"
                            //   value={formData.description}
                            //   onChange={handleChange}
                            placeholder="Description"
                            className="textarea textarea-bordered w-full"
                        />

                        <div className="modal-action">
                            <button
                                type="button"
                                className="btn btn-ghost"
                            // onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </form>
                    <div className="modal-action">
                        <a href="#" className="btn">Yay!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBookModal