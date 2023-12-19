import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const ratings = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { slug } = router.query;
  const [t1, sett1] = useState();

  const [page, setPage] = useState(1);
  const [references, setReferences] = useState(0);
  const [clear, setClear] = useState(0);
  const [comprehensiveness, setComprehensiveness] = useState(0);
  const [self, setSelf] = useState(0);
  const [auth, setAuth] = useState(0);

  const [simple, setSimple] = useState(0);
  const [standard1, setStandard1] = useState(0);
  const [standard2, setStandard2] = useState(0);
  const [grammar, setGrammar] = useState(0);

  const [colour, setColour] = useState(0);
  const [clarity, setClarity] = useState(0);
  const [visibility, setVisibility] = useState(0);
  const [labelling, setLabelling] = useState(0);

  const [summary, setSummary] = useState("");

  const handleSubmit = async () => {
    const finalScore =
      Number(references) +
      Number(clear) +
      Number(comprehensiveness) +
      Number(self) +
      Number(auth) +
      Number(simple) +
      Number(standard1) +
      Number(standard2) +
      Number(grammar) +
      Number(colour) +
      Number(clarity) +
      Number(visibility) +
      Number(labelling);

    await axios.post("/api/subjectExpert/", {
      expertID: session.user.id,
      bookID: slug,
      expertRating: finalScore,
      summary: summary,
    });
    console.log(finalScore);
  };

  useEffect(() => {
    if (session) {
      sett1(slug);
    }
  }, [session]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col items-center w-5/6 border border-black rounded-lg p-3 bg-slate-200">
          <div className="text-3xl">Subject Matter</div>

          <div className="text-lg w-5/6 mt-3">
            Compilation of classical references
          </div>
          <select
            onChange={(e) => setReferences(e.target.value)}
            className="mt-5 p-2 w-5/6 border rounded-lg"
          >
            <option value="-" disabled selected>
              Select Score
            </option>
            <option value="0">No</option>
            <option value="1">Direct Major Reference</option>
            <option value="2">Including Cross Reference</option>
            <option value="3">Direct All Reference</option>
            <option value="4">
              Including Cross Reference from All Classics
            </option>
            <option value="5">Along with commentators</option>
          </select>

          <div className="text-lg w-5/6 mt-3">Clear and Accurate Concepts</div>
          <input
            type="number"
            min={0}
            max={5}
            onChange={(e) => setClear(e.target.value)}
            className="w-5/6 mt-1 p-2 rounded-lg"
          />

          <div className="text-lg w-5/6 mt-3">Concepts Comprehensiveness</div>
          <input
            type="number"
            min={0}
            max={5}
            onChange={(e) => setComprehensiveness(e.target.value)}
            className="w-5/6 mt-1 p-2 rounded-lg"
          />

          <div className="text-lg w-5/6 mt-3">Self Explanatory Concepts</div>
          <input
            type="number"
            min={0}
            max={5}
            onChange={(e) => setSelf(e.target.value)}
            className="w-5/6 mt-1 p-2 rounded-lg"
          />

          <div className="text-lg w-5/6 mt-3">
            Support Authoratative References
          </div>
          <input
            type="number"
            min={0}
            max={5}
            onChange={(e) => setAuth(e.target.value)}
            className="w-5/6 mt-1 p-2 rounded-lg"
          />

          <div className="text-lg w-5/6 mt-3">
            Understandable to all three types of learners
          </div>
          <select
            onChange={(e) => setReferences(e.target.value)}
            className="mt-5 p-2 w-5/6 border rounded-lg"
          >
            <option value="-" disabled selected>
              Select Score
            </option>
            <option value="0">No</option>
            <option value="1">to some extent</option>
            <option value="2">Moderate</option>
            <option value="3">Fully</option>
          </select>

          <div className="text-3xl mt-10">Language</div>

          <div className="text-lg w-5/6 mt-3">Simple Language</div>
          <select
            onChange={(e) => setSimple(e.target.value)}
            className="mt-5 p-2 w-5/6 border rounded-lg"
          >
            <option value="-" disabled selected>
              Select Score
            </option>
            <option value="0">No</option>
            <option value="1">To some extent</option>
            <option value="2">Moderate</option>
            <option value="3">Fully</option>
          </select>

          <div className="text-lg w-5/6 mt-3">
            Standard technical terminology used
          </div>
          <select
            onChange={(e) => setStandard1(e.target.value)}
            className="mt-5 p-2 w-5/6 border rounded-lg"
          >
            <option value="-" disabled selected>
              Select Score
            </option>
            <option value="0">No</option>
            <option value="1">To some extent</option>
            <option value="2">Moderate</option>
            <option value="3">Fully</option>
          </select>

          <div className="text-lg w-5/6 mt-3">
            Standard punctuation marks and symbols used
          </div>
          <select
            onChange={(e) => setStandard2(e.target.value)}
            className="mt-5 p-2 w-5/6 border rounded-lg"
          >
            <option value="-" disabled selected>
              Select Score
            </option>
            <option value="0">No</option>
            <option value="1">To some extent</option>
            <option value="2">Moderate</option>
            <option value="3">Fully</option>
          </select>

          <div className="text-lg w-5/6 mt-3">
            Grammatical mistakes and Redundancies
          </div>
          <select
            onChange={(e) => setGrammar(e.target.value)}
            className="mt-5 p-2 w-5/6 border rounded-lg"
          >
            <option value="-" disabled selected>
              Select Score
            </option>
            <option value="0">No</option>
            <option value="1">To some extent</option>
            <option value="2">Moderate</option>
            <option value="3">Fully</option>
          </select>

          <div className="text-3xl mt-10">Illustrations</div>

          <div className="text-lg w-5/6 mt-3">Colour</div>
          <select
            onChange={(e) => setColour(e.target.value)}
            className="mt-5 p-2 w-5/6 border rounded-lg"
          >
            <option value="-" disabled selected>
              Select Score
            </option>
            <option value="5">Black and White</option>
            <option value="10">Colour</option>
          </select>

          <div className="text-lg w-5/6 mt-3">Clarity</div>
          <input
            type="number"
            min={0}
            max={5}
            onChange={(e) => setClarity(e.target.value)}
            className="w-5/6 mt-1 p-2 rounded-lg"
          />

          <div className="text-lg w-5/6 mt-3">Visibility of Colour</div>
          <input
            type="number"
            min={0}
            max={5}
            onChange={(e) => setVisibility(e.target.value)}
            className="w-5/6 mt-1 p-2 rounded-lg"
          />

          <div className="text-lg w-5/6 mt-3">Labelling</div>
          <input
            type="number"
            min={0}
            max={5}
            onChange={(e) => setLabelling(e.target.value)}
            className="w-5/6 mt-1 p-2 rounded-lg"
          />

          <div className="text-lg w-5/6 mt-3">Summary</div>
          <input
            type="text"
            onChange={(e) => setSummary(e.target.value)}
            className="w-5/6 mt-1 p-2 rounded-lg"
          />

          <div
            onClick={handleSubmit}
            className="mt-5 p-2 bg-blue-300 rounded-lg cursor-pointer"
          >
            Submit
          </div>
        </div>
      </div>
    </>
  );
};

export default ratings;
