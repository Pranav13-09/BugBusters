import React, { useState, useEffect } from "react"; 
import {useSession } from "next-auth/react";
import Navbar from '@/components/Navbar';

import Container from '@/components/user/Container';
import axios from "axios";


const authenticated = () => {
  const {  data:session, status } = useSession();
  
  const [books,setBooks] =useState([]);
  const fetchBooks = async () => {
    try {
      const response = await axios.get("/api/books/user/published", {
        params: {
          userID: "65758a63a7e1acd36ab6ccaa",
        },
      });
      console.log("Jay is here2");
      console.log(response, "heloooo");
      setBooks(response.data.books);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  
  // console.log(session,"i am data okk")

  return (
    <>
      {/* <div>authenticated</div> */}
      <Navbar></Navbar>

      {books.length>0 && <Container books={books}></Container>}
    </>
  )
}

export default authenticated;