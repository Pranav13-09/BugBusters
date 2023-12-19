import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const general = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [t1, sett1] = useState();

  useEffect(() => {
    if (slug) {
      sett1(slug);
    }
  }, [slug]);

  const [page, setPage] = useState(1);

  const [uniqueness1, setUniqueness1] = useState(0);
  const [uniqueness2, setUniqueness2] = useState(0);
  const [uniqueness3, setUniqueness3] = useState(0);
  const [uniqueness4, setUniqueness4] = useState(0);

  const [attractiveness, setAttractiveness] = useState(0);
  const [relevance, setRelevance] = useState(0);
  const [dimensions, setDimensions] = useState(0);
  const [bulkiness, setBulkiness] = useState(0);
  const [colors, setColours] = useState(0);
  const [font1, setFont1] = useState(0);
  const [font2, setFont2] = useState(0);
  const [font3, setFont3] = useState(0);
  const [introduction, setIntroduction] = useState(0);
  const [abbrevations, setAbbrevations] = useState(0);
  const [distribution, setDistribution] = useState(0);
  const [keywords, setKeywords] = useState(0);

  const [page1Score, setPage1Score] = useState(0);

  const score1 = () => {
    const score =
      Number(uniqueness1) +
      Number(uniqueness2) +
      Number(uniqueness3) +
      Number(uniqueness4);

    setPage1Score(score);
    console.log(score);
  };

  const handleSubmit = async () => {
    const finalScore =
      page1Score +
      Number(attractiveness) +
      Number(relevance) +
      Number(dimensions) +
      Number(bulkiness) +
      Number(colors) +
      Number(font1) +
      Number(font2) +
      Number(font3) +
      Number(introduction) +
      Number(abbrevations) +
      Number(distribution) +
      Number(keywords);
    console.log(finalScore, "i am finalScore");
    console.log(t1, "i am t1");

    try {
      const response = await axios.post("/api/committee/generateScore", {
        bookID: t1,
        bookScore: finalScore,
      });
      console.log(response, "i am response");
      router.push("/committe");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      {page === 1 ? (
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="flex flex-col items-center w-5/6 border border-black rounded-lg p-3 bg-slate-200">
            <div className="text-3xl">General Score</div>

            <div className="text-lg w-5/6 mt-3">Uniqueness of the book</div>
            <input
              type="number"
              min={0}
              max={5}
              onChange={(e) => setUniqueness1(e.target.value)}
              className="w-5/6 mt-1 p-2 rounded-lg"
            />

            <div className="text-lg w-5/6 mt-3">
              Whether the uniqueness claimed by the author has been conveyed
              clearly?
            </div>
            <select
              onChange={(e) => setUniqueness2(e.target.value)}
              className="mt-5 p-2 w-5/6 border rounded-lg"
            >
              <option value="-" disabled selected>
                Select Score
              </option>
              <option value="0">No</option>
              <option value="1">To some extent</option>
              <option value="2">Moderate Extent</option>
              <option value="3">Fully</option>
            </select>

            <div className="text-lg w-5/6 mt-3">
              Whether the book stayed focus on the uniqueness as claimed by the
              author?
            </div>
            <select
              onChange={(e) => setUniqueness3(e.target.value)}
              className="mt-5 p-2 w-5/6 border rounded-lg"
            >
              <option value="-" disabled selected>
                Select Score
              </option>
              <option value="0">No</option>
              <option value="1">To some extent</option>
              <option value="2">Moderate Extent</option>
              <option value="3">Fully</option>
            </select>

            <div className="text-lg w-5/6 mt-3">
              Whether the book is dealing with entire curriculum & syllabus?
            </div>
            <select
              onChange={(e) => setUniqueness4(e.target.value)}
              className="mt-5 p-2 w-5/6 border rounded-lg"
            >
              <option value="-" disabled selected>
                Select Score
              </option>
              <option value="0">No</option>
              <option value="1">To some extent</option>
              <option value="2">Moderate Extent</option>
              <option value="3">Fully</option>
            </select>

            <div
              onClick={() => {
                setPage(2);
                score1();
              }}
              className="mt-5 p-2 bg-blue-300 rounded-lg cursor-pointer"
            >
              Next
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="flex flex-col items-center w-5/6 border border-black rounded-lg p-3 bg-slate-200">
            <div className="text-3xl">
              Physical Appearance, Structure and Organisation
            </div>

            <div className="text-lg w-5/6 mt-3">
              Attractiveness of cover page
            </div>
            <input
              type="number"
              min={0}
              max={5}
              onChange={(e) => setAttractiveness(e.target.value)}
              className="w-5/6 mt-1 p-2 rounded-lg"
            />

            <div className="text-lg w-5/6 mt-3">
              Relevance of cover page design
            </div>
            <input
              type="number"
              min={0}
              max={5}
              onChange={(e) => setRelevance(e.target.value)}
              className="w-5/6 mt-1 p-2 rounded-lg"
            />

            <div className="text-lg w-5/6 mt-3">Dimensions of the Book</div>
            <input
              type="number"
              min={0}
              max={5}
              onChange={(e) => setDimensions(e.target.value)}
              className="w-5/6 mt-1 p-2 rounded-lg"
            />

            <div className="text-lg w-5/6 mt-3">Bulkiness of the Book</div>
            <input
              type="number"
              min={0}
              max={5}
              onChange={(e) => setBulkiness(e.target.value)}
              className="w-5/6 mt-1 p-2 rounded-lg"
            />

            <div className="text-lg w-5/6 mt-3">Colours in printing</div>
            <input
              type="number"
              min={0}
              max={5}
              onChange={(e) => setColours(e.target.value)}
              className="w-5/6 mt-1 p-2 rounded-lg"
            />

            <div className="text-lg w-5/6 mt-3">Type of font</div>
            <input
              type="number"
              min={0}
              max={10}
              onChange={(e) => setFont1(e.target.value)}
              className="w-5/6 mt-1 p-2 rounded-lg"
            />

            <div className="text-lg w-5/6 mt-3">Type of font</div>
            <input
              type="number"
              min={0}
              max={10}
              onChange={(e) => setFont2(e.target.value)}
              className="w-5/6 mt-1 p-2 rounded-lg"
            />

            <div className="text-lg w-5/6 mt-3">Consistency of font</div>
            <input
              type="number"
              min={0}
              max={10}
              onChange={(e) => setFont3(e.target.value)}
              className="w-5/6 mt-1 p-2 rounded-lg"
            />

            <div className="text-lg w-5/6 mt-3">
              Features of Introductory Section
            </div>
            <select
              onChange={(e) => setIntroduction(e.target.value)}
              className="mt-5 p-2 w-5/6 border rounded-lg"
            >
              <option value="-" disabled selected>
                Select Score
              </option>
              <option value="0">No</option>
              <option value="1">To some extent</option>
              <option value="3">Moderate Extent</option>
              <option value="5">Fully</option>
            </select>

            <div className="text-lg w-5/6 mt-3">List of Abbrevations</div>
            <select
              onChange={(e) => setAbbrevations(e.target.value)}
              className="mt-5 p-2 w-5/6 border rounded-lg"
            >
              <option value="-" disabled selected>
                Select Score
              </option>
              <option value="0">No</option>
              <option value="1">To some extent</option>
              <option value="3">Moderate Extent</option>
              <option value="5">Fully</option>
            </select>

            <div className="text-lg w-5/6 mt-3">
              Topic Distribution and Sequencing
            </div>
            <select
              onChange={(e) => setDistribution(e.target.value)}
              className="mt-5 p-2 w-5/6 border rounded-lg"
            >
              <option value="-" disabled selected>
                Select Score
              </option>
              <option value="0">No</option>
              <option value="5">Yes</option>
            </select>

            <div className="text-lg w-5/6 mt-3">
              Keywords and Concepts Highlighted
            </div>
            <select
              onChange={(e) => setKeywords(e.target.value)}
              className="mt-5 p-2 w-5/6 border rounded-lg"
            >
              <option value="-" disabled selected>
                Select Score
              </option>
              <option value="0">No</option>
              <option value="3">Yes</option>
            </select>

            <div className="flex w-1/4 justify-between">
              <div
                onClick={() => {
                  setPage(1);
                }}
                className="mt-5 p-2 bg-blue-300 rounded-lg cursor-pointer"
              >
                Prev
              </div>
              <div
                onClick={handleSubmit}
                className="mt-5 p-2 bg-blue-300 rounded-lg cursor-pointer"
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default general;
