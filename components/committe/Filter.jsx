'use client'
import React, {useState, useEffect} from 'react'
import {BsSliders2Vertical, BsChevronUp} from "react-icons/bs"
import axios from 'axios'



const Filter = ({setFilter}) => {
    const [showFilter, setShowFilter] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedSize, setSelectedSize] = useState([])
    const [allHexValues, setHexValues] = useState([])
    const [selectedHexValues, setSelectedHexValues] = useState([])
    const [price, setPrice] = useState({
        min:0,
        max:10,
    })
    const display=['Published Books', 'Under Review Books', 'Discarded Books']
    const allHexValue = allHexValues
    
    // useEffect(() => {
    //     axios.get('/api/filterproduct',{
    //         params:{
    //             categories:selectedCategories,
    //             size:selectedSize,
    //             price:{
    //                 min:price.min,
    //                 max:price.max
    //             },
    //             colors: selectedHexValues
    //         },
    //         headers:{
    //             'Content-Type':'application/json'
    //         }
    //     })
    //     .then((response) => {
    //         console.log("response",response.data)
    //     })
    //     .catch((error) => {
    //         console.log("Error",error)
    //     })
    // })

    return(
        <div className='relative'>
            <div className={`md:w-[250px] border-l-[0.5px] border-r-[0.5px] ${showFilter ? "max-md:w-[250px]":"w-0 max-md:invisible"}`}>
                <div className='flex items-center justify-between px-5 py-4 border-b-[0.5px]'>
                        <h1 className='text-neutral-800'>Filters</h1>
                        <BsSliders2Vertical size={20} className = 'text-neutral-600' />
                </div>
                <div className='flex flex-col py-3 pb-5 tet-sm text-neutral-600 border-b-[0.5px] cursor-pointer'>
                    <span
                        className={`py-3 px-5 ${selectedCategories.includes('Blouses') ? "bg-purple-50":""}`}
                        onClick={() => setFilter(1)}
                    >
                        To be Approved
                    </span>
                    <span
                        className={`py-3 px-5 ${selectedCategories.includes('Shirt') ? "bg-purple-50":""}`}
                        onClick={() => setFilter(2)}
                    >       
                        Under Subject Reviewers
                    </span>
                    <span 
                    className={`py-3 px-5 ${selectedCategories.includes('Denim&Jeans') ? 'bg-purple-50' : ''}`}
                    onClick={() => setFilter(3)}
                    >
                        To be Published
                    </span>
                </div>
                {/* <div className='border-b-[0.5px] pb-10'>
                    <div className='flex items-center justify-between px-5 py-4 border-b-[0.5px] mb-5'>
                        <h1 className='text-neutral-800'>Prices</h1>
                        <BsChevronUp size={18} className = 'text-neutral-600' />
                    </div>
                    <div className='grid grid-cols-2 gap-5 px-5 overflow-hidden'>
                        <div className='flex flex-col justify-center items-center'>
                            <label htmlFor="" className='text-[15px] opacity-75'>Min</label>
                            <div className='relative'>
                                <span className='absolute left-3 top-1'>$</span>
                                <input className='w-full outline-none border-[1px] rounded-lg px-2 text-center py-[2px]' type="number" name="min" onChange={handelMinChange} value={price.min} id="" />
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <label htmlFor="" className='text-[15px] opacity-75'>Max</label>
                            <div className='relative'>
                                <span className='absolute left-3 top-1'>$</span>
                                <input className='w-full outline-none border-[1px] rounded-lg px-2 text-center py-[2px]' type="number" name="max" onChange={handlMaxChange} value={price.max} id="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-b-[0.5px]'>
                    <div className='flex items-center justify-between px-5 py-4 border-b-[0.5px] mb-5'>
                        <h1 className='text-neutral-800'>Colors</h1>
                    </div>
                    <ul className='grid grid-cols-4 px-5 gap-5 mb-4'>
                        {allHexValue.map((hexvalue, index) => (
                            <li
                            key={index}
                            className={`w-[40px] h-[40px] rounded-2xl border-[0.5px] border-neutral-300 cursor-pointer ${selectedHexValues.includes(`#${hexvalue}`) ? "shadow-2xl opacity-25":""}`}
                            style={{backgroundColor: `#${hexvalue}`}}
                            onClick={() => toggleColor(`#${hexvalue}`)}
                            >

                            </li>
                        ))}
                    </ul>
                </div>
                <div className='sizes'>
                    <div className='flex items-center justify-between px-5 py-4 border-b-[0.5px] mb-5'>
                        <h1 className='text-neutral-800'>sizes</h1>
                    </div>
                    <ul className='grid grid-cols-4 px-5 gap-5'>
                        <li
                        className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${selectedSize.includes('SM') ? 'bg-neutral-900 text-white':''}`}
                        onClick={() => togglesize('SM')}
                        >
                            SM
                        </li>
                        <li
                        className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${selectedSize.includes('MD') ? 'bg-neutral-900 text-white':''}`}
                        onClick={() => togglesize('MD')}
                        >
                            MD
                        </li>
                        <li
                        className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${selectedSize.includes('XL') ? 'bg-neutral-900 text-white':''}`}
                        onClick={() => togglesize('XL')}
                        >
                            XL
                        </li>
                        <li
                        className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${selectedSize.includes('2XL') ? 'bg-neutral-900 text-white':''}`}
                        onClick={() => togglesize('2XL')}
                        >
                            2XL
                        </li>
                        <li
                        className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${selectedSize.includes('3XL') ? 'bg-neutral-900 text-white':''}`}
                        onClick={() => togglesize('3XL')}
                        >
                            3XL
                        </li>
                        <li
                        className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer ${selectedSize.includes('4XL') ? 'bg-neutral-900 text-white':''}`}
                        onClick={() => togglesize('2XL')}
                        >
                            4XL
                        </li>
                    </ul>
                </div>
            </div>
        <div onClick={() => setShowFilter(!showFilter)} className='absolute md:hidden top-[20px] right-[-42px] rotate-90 bg-gray-100 px-2 rounded-t-sm cursor-pointer'>Filters</div> */}
        </div>
        </div>
    )
}

export default Filter