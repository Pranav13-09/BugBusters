import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Container from "@/components/subjectExpert/Container";
import axios from "axios";
import Link from "next/link";

const author = () => {
  const { data: session, status } = useSession();
  const [books, setBooks] = useState([]);
   const [userId,setUserId] = useState("")
  const fetchBooks = async () => {
    try {
      const response = await axios.get("/api/books/subjectExpert/getBooks", {
        params: {
          userID: userId,
        },
      });
      console.log(response, "i am response");
      setBooks(response.data.books);
    } catch (error) {
      console.error("Error:", error);
    }
  };

    useEffect(() => {
    if (userId) {
      fetchBooks();
    console.log("i am called")
    }
  }, [userId]);

  useEffect(() => {
    if (session) {
       setUserId(session.user.id)   
    }
  },[session])
 

  console.log(session, "i am data okk");
  return (
    <>
      {/* <div>authenticated</div> */}
      <Navbar></Navbar>
      {books.length > 0 && <Container books={books}></Container>}
    </>
  );
};

export default author;
