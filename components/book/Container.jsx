import Link from "next/link";
import React from "react";
import Filter from "./Filter";
import Item from "./Item";

const Container = ({ book }) => {
  return (
    <div className="mb-[200px]">
      <div className="flex ">
        <Link href="/filters" className="opacity-100">
          <div>
            <Filter />
          </div>
        </Link>
        <div className="px-20">
          <Item book={book} />
        </div>
      </div>
    </div>
  );
};

export default Container;
