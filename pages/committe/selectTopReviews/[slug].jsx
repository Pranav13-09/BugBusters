import Navbar from "@/components/Navbar";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


const selectTopReviews = () => {
    const router = useRouter();

  const [book, setBook] = useState();
  const { slug } = router.query;
  const [t1, sett1] = useState();
  const [selectedReviews, setSelectedReviews] = useState([]);


  const findItem = (review) => {
    const isPresent = selectedReviews.find(
      (item) => item.expert_id === review.expert_id
    );
    return isPresent;
  };

  const handleClick = (review) => {
    const isPresent = findItem(review);
    if (isPresent) {
      setSelectedReviews(
        selectedReviews.filter((item) => item.expert_id !== review.expert_id)
      );
    } else {
      setSelectedReviews([...selectedReviews, review]);
    }
  };

  const handleSubmit = async () => {
    if (selectedReviews.length !== 3) {
      alert("Select 3 reviews!!!");
      return;
    }
    try{
     const response = await axios.post("/api/committee/selectthree", {
      topThree: selectedReviews,
      bookID: t1,
    });
    console.log(response,"i am response")
    router.push("/committe")
    }catch(err){
      console.log(err,"i am error")
    }
 
  };

  const fetchBook = async () => {
    const data = await axios.get("/api/books/getInfo", {
      params: {
        bookID: slug,
      },
    });
    console.log(data,"i am data")
    setBook(data.data);
  };

  useEffect(() => {
    console.log(selectedReviews);
  }, [selectedReviews]);

  useEffect(() => {
    if (slug) {
      fetchBook();
    }
  }, [slug]);

  useEffect(() => {
    if(slug){
       sett1(slug);
    }
   
  }, [slug]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full items-center">
        <div className="flex w-5/6 mt-5">
          <div className="w-1/4">{book && <img src={book.image} alt="" />}</div>
          <div className="w-3/4 px-5">
            { book && book.expertsScore.map((review, index) => (
              <div
                className={`bg-slate-200 p-3 mb-5 rounded-lg ${
                  findItem(review) ? "border border-black" : ""
                }`}
                onClick={(e) => handleClick(review)}
              >
                <option key={index} value={index} className="text-xl font-bold">
                  {review.expert_id}
                </option>
                <div>{review.summary}</div>
                <div className="font-bold">Rating: {review.expertScore / 5}</div>
              </div>
            ))}
            <div
              onClick={handleSubmit}
              className="bg-blue-400 p-2 rounded-lg w-40 text-center cursor-pointer hover:bg-blue-500 mb-10"
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default selectTopReviews;
