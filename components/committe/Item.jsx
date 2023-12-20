import React, { useState, useEffect } from "react";
// import {AiOutlineHeart} from "react-icons/ai"
import Link from "next/link";
import axios from "axios";


const Item = ({book,filter}) => {
  // console.log("Hi! I am from Itemajjj", book);
  const [products, setProducts] = useState(book);
  const display=['To be Approved', 'Under Subject Reviewers', 'To be Published']
  const url=[true, false, true];
  const routes=['/committee/','','/committe/select/'];



  useEffect(() => {
    setProducts(book);
  }, []);

  if (products.length === 0) {
    return <div>empty</div>;
  }
  return (
    <div>
      <h1 className="py-3 text-xl">
        {filter===-1 ? "All My Books" : display[filter-1]}
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-12 ">
        {products &&
          products.map((product) => (
            product.status=== Number(filter) &&
            <div key={product.id}>
             <Link href={`${routes[filter-1]}${product._id}`} className={!url[filter-1] ? 'pointer-events-none' :''} aria-disabled={!url[filter-1]}>
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
  );
};

export default Item;
