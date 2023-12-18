import React from 'react'
// import {AiOutlineHeart} from "react-icons/ai"
import Link from 'next/link'

const Item = () => {
    const products = [    {
    "name": "The Complete Book of Ayurvedic Home Remedies",
    "status": "1",
    "author_id": "65758ca9a7e1acd36ab6ccc0",
    "category": "Ayurveda",
    "image": "https://m.media-amazon.com/images/I/61dJ4ArbbPL.jpg"
},
{
    "name": "The Science of Self-healing : a Practical Guide",
    "status": "2",
    "author_id": "657eaa50f891727e932a2b07",
    "category": "Ayurveda",
    "image": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/713KdseDJDL._AC_UF1000,1000_QL80_.jpg"
},
{
    "name": "The Yoga of Herbs: An Ayurvedic Guide to Herbal Medicine",
    "status": "1",
    "author_id": "657eaa50f891727e932a2b07",
    "category": "Ayurveda",
    "image": "https://store.ayurveda.com/cdn/shop/products/textbook-volume1_600x600.jpg?v=1595863589"
},];
    // console.log(products)
    if(products.length === 0){
        return(
            <div>empty</div>
        )
    }
    return(
        <div>
            <h1 className='py-3 text-xl'>Recommended Books</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-12 '>
                {products && products.map((product) => (
                    <div key={product.id}>
                        <Link href={`/dashboard/${product.id}`}>
                            <div className='relative rounded-lg'>
                                <img src={product.image} className='w-[200px] h-[200px] object-cover object-top rounded-lg' alt="" />
                            </div>
                            <div className='flex items-center justify-between mt-4'>
                                <div>
                                    <h1  className='text-[14px] font-medium max-w-[150px] whitespace-nowrap overflow-hidden' >{product.title}</h1>
                                    <p className='text-[13px] opacity-60'>{product.name}</p>
                                </div>
                                <span className='px-2 font-medium bg-gray-100 rounded-lg'>{product.category}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Item