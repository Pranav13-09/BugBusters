import React, { useState, useEffect } from "react"; 
import {useSession } from "next-auth/react";
import Navbar from '@/components/Navbar';
import Container from '@/components/committe/Container';
import axios from "axios";
import Link from "next/link";

const author = () => {
  const {  data:session, status } = useSession();
  const [books,setBooks] =useState([]);
  const fetchBooks = async () => {
    try {
      const response = await axios.get("/api/books/user/published", {
        params: {
          userID: "65758a63a7e1acd36ab6ccaa",
        },
      });
      console.log(response, "i am response");
      setBooks(response.data.books);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  
  console.log(session,"i am data okk")
  return (
    <>
      {/* <div>authenticated</div> */}
      <Navbar></Navbar>
      <div style={{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",marginTop:"20px"}}>
      {/* <Link href="addBook">
      <button style={{padding:"10px",borderRadius:"10px",marginLeft:"auto",marginRight:"auto"}} className="bg-blue-200">Add a book</button>
      </Link> */}
      </div>
      {books.length>0 && <Container books={books}></Container>}
    </>
  )
}

export default author;