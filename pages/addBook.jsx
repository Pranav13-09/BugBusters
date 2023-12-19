import Navbar from "@/components/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [publisher, setPublisher] = useState("");
  const [authors, setAuthors] = useState([]);
  const [email, setEmail] = useState("");

  const addAuthor = async (e) => {
    e.preventDefault();

    try {
      const author = await axios.post("", {
        email: email,
      });

      setAuthors([...authors, author]);
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  const addBook = async (e) => {
    e.preventDefault();
    await axios.post("", {
      book: {
        name: name,
        img: img,
        publisher: publisher,
        category: category,
      },
      authors: authors,
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col items-center w-5/6 border border-black rounded-lg p-3 bg-slate-200">
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
              className="flex items-center justify-center py-2 w-1/5 rounded-tr-lg rounded-br-lg bg-blue-200"
            >
              Add Co-Author
            </div>
          </div>

          <div>Add Book</div>
        </div>
      </div>
    </>
  );
};

export default page;