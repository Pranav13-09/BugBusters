import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import Link from 'next/link'


const test = () => {
  const [products,setProduct] = useState([{id:1,image:"https://m.media-amazon.com/images/I/61dJ4ArbbPL.jpg",title:"okk1",category:"ayurveda"}])
  return (
    <>
   
    <Navbar/>
   <div className="mb-[200px]">
      <div className="flex ">
          <div>
           <div className='flex flex-col py-3 pb-5 tet-sm text-neutral-600 border-b-[0.5px]'>
                    <span
                        className={`py-3 px-5 }`}
                        // onClick={() => toggleCategory('Blouses')}
                    >
                        Languages
                    </span>
                    <span
                        className={`py-3 px-5 `}
                        // onClick={() => toggleCategory('Shirt')}
                    >
                        Ratings
                    </span>
                    <span 
                    className={`py-3 px-5`}
                    // onClick={() => toggleCategory('Denim&Jeans')}
                    >
                        Authors
                    </span>
                    <span 
                        className={`py-3 px-5 `}
                        // onClick={() => toggleCategory('Party')}
                    >
                        New Released
                    </span>
                </div>
          </div>
        <div className="px-24">
          <div>
      <h1 className="py-3 text-xl">Recommended Books</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-12 ">
        {products &&
          products.map((product) => (
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
      </div>

     


      
       </>
  )
}

export default test