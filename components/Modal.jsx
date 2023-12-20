import axios from "axios";
import react, { useState, useEffect } from "react";
import {useRouter} from "next/router"

import ReactStars from "react-stars";
const Modal = ({ isOpen, onClose, reviewer_id, book_id }) => {
  const router = useRouter()
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  if (!isOpen) return null;

  const handleChange = (change) => {
    setRating(change);
    console.log(change);
  };
  const onSubmit = async () => {
    console.log(rating);
    try{
      console.log(reviewer_id,review,"i am here")
    const response =  await axios.post("/api/reviews/user/addReview", {
      review: review,
      userId: reviewer_id,
      bookId: book_id,
      rating: rating,
    });
    onClose()
    router.reload()
    }catch(err){
      console.log(err,"i am error")
    }
   
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {/* Modal content */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {/* Add your modal content here */}
            <div className="text-center sm:text-left">
              <h3
                className="text-lg font-medium leading-6 text-gray-900 mb-4"
             
              >
                Add Review
              </h3>
              <ReactStars
                count={5} // Total number of stars
                size={30} // Size of the stars
                color1="#CCCCCC" // Empty star color
                color2="#f3b411" // Filled star color
                edit={true} // Disable rating interaction
                value={rating}
                onChange={handleChange}
              />
              {/* Add your form or review input fields here */}
              {/* Example: */}
              <textarea
                className="w-full h-24 px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your review..."
                   onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* Modal footer */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onSubmit}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Submit
            </button>
            <button
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
            {/* You can add a Submit button or any other action button here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
