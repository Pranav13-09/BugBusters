import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";
import axios from "axios";
import ReactStars from "react-stars";
import { useSession } from "next-auth/react";
import {
  BiUpvote,
  BiSolidUpvote,
  BiDownvote,
  BiSolidDownvote,
} from "react-icons/bi";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const selectTopReviews = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [book, setBook] = useState();
  const [hasUpvoted, setHasUpvoted] = useState(-1);
  const [hasDownvoted, setHasDownvoted] = useState(-1);
  const { slug } = router.query;
  const [t1, sett1] = useState();
  const [selectedReviews, setSelectedReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reviews = [
    {
      _id: 1,
      review:
        "sdjfka sdifjsdfi sif wehfw ida suiefhw ew ugidwd iwgediw iedowihd wieu d",
      reviewer_id: 1,
      book_id: t1,
      upvotes: 5,
      downvotes: 2,
      rating: 3,
    },
    {
      _id: 2,
      review:
        "sdjfka sdifjsdfi sif wehfw ida suiefhw ew ugidwd iwgediw iedowihd wieu d",
      reviewer_id: 2,
      book_id: t1,
      upvotes: 10,
      downvotes: 5,
      rating: 1,
    },
    {
      _id: 3,
      review:
        "sdjfka sdifjsdfi sif wehfw ida suiefhw ew ugidwd iwgediw iedowihd wieu d",
      reviewer_id: 3,
      book_id: t1,
      upvotes: 3,
      downvotes: 7,
      rating: 5,
    },
  ];

  const fetchBook = async () => {
    const data = await axios.get("/api/books/getInfo", {
      params: {
        bookID: slug,
      },
    });
    console.log(data, "i am data");
    setBook(data.data);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpvote = () => {};

  const handleDownvote = () => {};

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
            {book && (
              <img src={book.image} style={{ borderRadius: "10px" }} alt="" />
            )}
            {book && (
              <ReactStars
                count={5} // Total number of stars
                value={Number(book.finalEvaluationScore) / 15} // Rating value (can be a decimal)
                size={30} // Size of the stars
                color1="#CCCCCC" // Empty star color
                color2="#f3b411" // Filled star color
                edit={false} // Disable rating interaction
              />
            )}
            {book && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#89C4F4",
                  marginTop: "10px",
                  borderRadius: "10px",
                  padding: "10px",
                }}
                className="cursor-pointer"
              >
                <p
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                  onClick={openModal}
                >
                  Add Review
                </p>
              </div>
            )}
          </div>
          {session && (
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              book_id={t1}
              reviewer_id={session.user.id}
            />
          )}
          <div className="w-3/4 px-5">
            <div className="text-xl font-bold mb-3">User Reviews</div>
            {reviews.map((review, index) => (
              <div className={`bg-slate-200 p-3 mb-5 rounded-lg`}>
                <ReactStars
                  count={5} // Total number of stars
                  value={Number(review.rating)} // Rating value (can be a decimal)
                  size={30} // Size of the stars
                  color1="#CCCCCC" // Empty star color
                  color2="#f3b411" // Filled star color
                  edit={false} // Disable rating interaction
                />
                <div>{review.review}</div>
                <div className="flex w-20 justify-between items-center">
                  <div className="flex w-2/5 justify-between items-center mt-2">
                    {hasUpvoted !== review._id ? (
                      <BiUpvote
                        onClick={() => {
                          setHasUpvoted(review._id);
                          handleUpvote();
                        }}
                      />
                    ) : (
                      <BiSolidUpvote />
                    )}
                    <div>{review.upvotes}</div>
                  </div>

                  <div className="flex w-2/5 justify-between items-center mt-2">
                    {hasDownvoted !== review._id ? (
                      <BiDownvote
                        onClick={() => {
                          setHasDownvoted(review._id);
                          handleDownvote();
                        }}
                      />
                    ) : (
                      <BiSolidDownvote />
                    )}
                    <div>{review.downvotes}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default selectTopReviews;
