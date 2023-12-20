import Link from "next/link";
import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

const Container = ({ books }) => {
   console.log(books,"Hello");
   const [filter,setFilter]=useState(1);
  return (
    <div className="mb-[200px]">
      <div className="flex ">
          <div>
            <Filter setFilter={setFilter}/>
          </div>
        <div className="px-20">
          <Item book={books} filter={filter}/>
        </div>
      </div>
    </div>
  );
};

export default Container;
