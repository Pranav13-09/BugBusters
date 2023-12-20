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

//   const handleClick = (review) => {
//     const isPresent = findItem(review);
//     if (isPresent) {
//       setSelectedReviews(
//         selectedReviews.filter((item) => item.expert_id !== review.expert_id)
//       );
//     } else {
//       setSelectedReviews([...selectedReviews, review]);
//     }
//   };

  const fetchBook = async () => {
    const data = await axios.get("/api/books/getInfo", {
      params: {
        bookID: slug,
      },
    });
    console.log(data, "i am data");
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
    if (slug) {
      sett1(slug);
    }
  }, [slug]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full items-center">
        <div className="flex w-5/6 mt-5">
          <div className="w-1/4">
            {book && <img src={book.image} style={{borderRadius:"10px"}} alt="" />}
            {book && 
            <div style={{display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center", 
                backgroundColor:"#89C4F4",
                marginTop:"10px",
                borderRadius:"10px",
                padding:"10px"
            }}>
                <p style={{fontSize:"20px",fontWeight:"bold"}}>
                    Overall Score of Book
                </p>
                <div style={{alignContent:"center",fontSize:"20px",fontWeight:"bold", color:"#003171"}} >
                   {book.finalEvaluationScore}
                </div>
            </div>
            }

        </div>
          <div className="w-3/4 px-5">
            {book &&
              book.expertsScore.map((review, index) => (
                <div
                  className={`bg-slate-200 p-3 mb-5 rounded-lg`}
                >
                  <option
                    key={index}
                    value={index}
                    className="text-xl font-bold"
                  >
                    Subject Reviewer Rating {index+1}
                  </option>
                  <div>{review.summary}</div>
                  <div className="font-bold">Rating: {review.expertScore}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default selectTopReviews;
