import React from 'react'
import {BiSearch} from "react-icons/bi"

const SearchBar = () => {
  return (
    <div>
        <div className='flex items-center bg-gray-100 p-2 rounded-full max-md:hidden' style={{backgroundColor:"white" , width:"500px",marginRight:"auto"}}>
            <button><BiSearch size={20} className = 'opacity-50' /></button>
            <input 
            type="text"
            className='outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]'
            placeholder='Search'
            autoComplete='false'
            style={{backgroundColor:"white", width:"100%"}}
            />
        </div>
    </div>
  )
}

export default SearchBar;