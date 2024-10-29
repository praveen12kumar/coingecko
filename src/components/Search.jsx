import React, {useContext, useEffect, useState} from 'react'
import Input from './Input'
import { IoIosSearch } from "react-icons/io";
import CoinContext from '../context/coinContext';

const Search = ({search, setSearch}) => {
    
    const {fetchSearchResults} = useContext(CoinContext);

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(()=>{
        if(!search) return;

        const delayDebounceFn = setTimeout(() => {
            fetchSearchResults(search)
        }, 500)

        return ()=> clearTimeout(delayDebounceFn);

    },[search])
    
  return (
    <div className="w-full mt-10">
            <div className=" w-[80%] py-1 pl-6 mx-auto rounded-full flex items-center  bg-[#f3f3f3] ">
                <IoIosSearch className='text-2xl font-bold'/>
                <Input 
                    styles={"text-md font-poppins text-slate-700"}
                    type={"text"}
                    placeHolder={"Search"}
                    value={search}
                    onChangeHandler={handleSearch}
                    />
            </div>
        </div>
  )
}

export default Search