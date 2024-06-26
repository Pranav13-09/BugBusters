import React, { useState, useEffect } from "react";
import ImageGallery from "../../components/ImageGallery";
import Info from "../../components/Info";
// import Review from '@/app/components/Review'
import ReviewSection from "../../components/ReviewSection";
import { getServerSession } from "next-auth";
// import { options } from "@/app/api/auth/[...nextauth]/options";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Container from "@/components/user/Container";

export default function Page() {
  const router = useRouter();
  const [book, setBook] = useState({});
  const { slug } = router.query;
  const [t1, sett1] = useState();

  const fetchBooks = async () => {
    try {
      console.log(slug);
      const response = await axios.get("/api/books/getInfo", {
        params: {
          bookID: slug,
        },
      });
      console.log(response.data, "i am response12222");
      setProducts(response.data.books);
      setBook(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchBooks();
    }
  }, [slug]);

  useEffect(() => {
    sett1(slug);
  }, []);

  //  const { param1, param2 } = router.query;
  // const session = await getServerSession(options);
  // const currentUserId = session?.user.id
  // const product = await prisma.product.findUnique({
  //     where:{
  //         id:productId
  //     }
  // })
  // const allReview = await prisma.review.findMany({
  //     where:{
  //         productId:productId
  //     }
  // })
  // let averageRating = 0;
  // if(allReview.length > 0){
  //     const totalRating = allReview.reduce((acc,review)=>{
  //         return acc + review.rating
  //     },0)
  //     averageRating = totalRating/ allReview.length
  // }
  // const urlString = product?.images
  return (
    <>
    <Navbar></Navbar>
    <Container book={book}></Container>
    </>
    // <div className="max-w-[1280px] mx-auto px-5 py-5">
    //   <div className="font-semibold text-2xl mb-2">
    //     <a href="/">SEINE</a>
    //   </div>
    //   <hr />
    //   {product && (
    //     <div className="grid grid-cols-2 mt-10 gap-14">
    //       {urlString && <ImageGallery imageUrls={urlString} />}
    //       <Info
    //         {...product}
    //         rating={averageRating}
    //         numbercomments={allReview.length}
    //       />
    //     </div>
    //   )}
    //   <div className="mb-20 mt-20">
    //     <div className="flex items-center space-x-5 mb-10">
    //       <span className="w-[5px] h-[30px] bg-purple-600 rounded-full inline-block"></span>
    //       <span className="font-medium text-xl">Product Description</span>
    //     </div>
    //     {product && (
    //       <div className="grid grid-cols-2">
    //         <div className="fles flex-col justify-center">
    //           <div className="grid grid-cols-3 gap-5 mb-5">
    //             <div>
    //               <h3 className="font-medium">Category</h3>
    //               <p className="text-sm text-purple-500">{product.category}</p>
    //             </div>
    //             <div>
    //               <h3 className="font-medium">Dress Style</h3>
    //               <p className="text-sm text-purple-500">{product.style}</p>
    //             </div>
    //             <div>
    //               <h3 className="font-medium">Store</h3>
    //               <p className="text-sm text-purple-500">{product.store}</p>
    //             </div>
    //           </div>
    //           <div
    //             style={{ borderColor: `{${product.color.split(",").pop()}}` }}
    //             className={`leading-6 text-sm text-neutral-700 h-[200px] border-[1px] rounded-md p-4 overflow-scroll`}
    //             dangerouslySetInnerHTML={{ __html: product?.description }}
    //           ></div>
    //         </div>
    //         <div className="flex justify-end relative items-center">
    //           <img
    //             src={product.images.split(",").pop()}
    //             className="max-h-[300px] w-10/12 rounded-lg object-cover"
    //             alt=""
    //           />
    //           <span className="text-sm absolute bottom-2 right-2 text-white font-medium">
    //             {product.title}
    //           </span>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    //   <div className="mt-20 mb-20">
    //     <div className="flex items-center space-x-5 mb-10">
    //       <span className="w-[5px] h-[30px] bg-purple-600 rounded-full inline-block"></span>
    //       <span className="font-medium text-xl">Comment & Review Section</span>
    //     </div>
    //     <div className="grid grid-cols-2">
    //       <div>
    //         {allReview.map((review, index) => (
    //           <div key={review.id} className="mb-5">
    //             <h1 className="mb-2 font-medium">Comment: {index + 1}</h1>
    //             <ReviewSection {...review} />
    //           </div>
    //         ))}
    //       </div>
    //       <Review productId={product?.id} userId={currentUserId} />
    //     </div>
    //   </div>
    // </div>
  );
}
