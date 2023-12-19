import React, { useState, useEffect } from "react"; 
import {useSession } from "next-auth/react";
import Navbar from '@/components/Navbar';
import Container from '@/components/author/Container';
import axios from "axios";
import Link from "next/link";

const author = () => {
  const {  data:session, status } = useSession();
  const [books,setBooks] =useState([]);
  const [published,setPublished] =useState([]);
  const fetchBooks = async () => {
    try {
      const response = await axios.get("/api/books/author/myBooks", {
        params: {
          authorID: "658172bf7e02bf146e33b91b",
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
      <Link href="addBook">
      <button style={{padding:"10px",borderRadius:"10px",marginLeft:"auto",marginRight:"auto"}} className="bg-blue-200">Add a book</button>
      </Link>
      </div>
      {books.length>0 && <Container books={books}></Container>}

      {/* {books.length>0 && <Container books={books}></Container>} */}
      <div className="mb-[200px]">
      <div className="flex ">
        <div className="px-20">
            <h1 className="py-3 text-xl" style={{marginLeft:"250px"}}>Published Author Books</h1>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-12 ">
            {published &&
            published.map((product) => (
                <div key={product.id}>
                <Link href={`/dashboard/${product._id}`}>
                    <div className="relative rounded-lg">
                    <img
                        src={product.image}
                        className="w-[200px] h-[200px] object-cover object-top rounded-lg"
                        alt=""
                    />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                    <div>
                        <h1 className="text-[14px] font-medium max-w-[150px] whitespace-nowrap overflow-hidden">
                        {product.title}
                        </h1>
                        <p className="text-[13px] opacity-60">{product.name}</p>
                    </div>
                    <span className="px-2 font-medium bg-gray-100 rounded-lg">
                        {product.category}
                    </span>
                    </div>
                </Link>
                </div>
            ))}
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default author;