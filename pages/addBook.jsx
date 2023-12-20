import Navbar from "@/components/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

const page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [publisher, setPublisher] = useState("");
  const [authors, setAuthors] = useState([]);
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState();
  console.log(session, "i am data");

  const addAuthor = async (e) => {
    e.preventDefault();

    try {
      const author = await axios.post("/api/books/author/check", {
        email: email,
      });
      console.log(author.data.author, "i am author");

      setAuthors([...authors, author.data.author]);
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  const addBook = async (e) => {
    e.preventDefault();
    console.log("I ma clsijhak");
    try {
      const response = await axios.post("/api/books/author/add", {
        book: {
          name: name,
          img: img,
          publisher: publisher,
          category: category,
        },
        authors: authors,
        authorID: session.user.id,
      });
      console.log(response, "i am response");
      toast.success("Book added successfully");
      router.push("/author");
    } catch (err) {
      toast.error("Some error occured");
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col items-center w-5/6 border border-black rounded-lg p-3 bg-slate-400">
          <div className="text-3xl">Add Book</div>

          <div className="text-lg w-5/6 mt-3">Book Name</div>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-5/6 mt-1 p-2 rounded-lg"
          />

          <div className="text-lg w-5/6 mt-3">Book Image Link</div>
          <input
            type="text"
            onChange={(e) => setImg(e.target.value)}
            className="w-5/6 mt-1 p-2 rounded-lg"
          />

          <div className="text-lg w-5/6 mt-3">Published By</div>
          <input
            type="text"
            onChange={(e) => setPublisher(e.target.value)}
            className="w-5/6 mt-1 p-2 rounded-lg"
          />

          <select
            onChange={(e) => setCategory(e.target.value)}
            className="mt-5 p-2 w-5/6 border rounded-lg"
          >
            <option value="-" disabled selected>
              Select Category
            </option>
            <option value="ayurveda">Ayurveda</option>
            <option value="yoga">Yoga</option>
            <option value="unani">Unani</option>
            <option value="siddha">Siddha</option>
            <option value="homeopathy">Homeopathy</option>
          </select>

          <div className="flex flex-col items-center w-full">
            {authors.length !== 0 && (
              <div className="text-xl mt-5">Co-Authors</div>
            )}
            {authors.map((author, index) => (
              <div
                className="mt-5 p-2 w-5/6 border rounded-lg bg-white"
                key={index}
              >
                {author.email}
              </div>
            ))}
          </div>

          <div className="flex w-5/6 mt-5">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-4/5 p-2 rounded-tl-lg rounded-bl-lg"
            />
            <div
              onClick={(e) => addAuthor(e)}
              className="flex items-center justify-center py-2 w-1/5 rounded-tr-lg rounded-br-lg bg-blue-200 hover:cursor-pointer"
            >
              Add Co-Author
            </div>
          </div>

          <div
            onClick={addBook}
            className="cursor-pointer p-2 bg-blue-400 hover:bg-blue-500 mt-5 rounded-lg"
          >
            Add Book
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        className=" font-medium"
      />
    </>
  );
};

export default page;
