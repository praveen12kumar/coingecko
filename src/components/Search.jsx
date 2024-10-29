import React, {useState} from 'react'
import Input from './Input'
import { IoIosSearch } from "react-icons/io";

const Search = () => {
    const [search, setSearch] = useState("")
  return (
    <div className="w-full mt-10">
            <div className=" w-[80%] py-1 pl-6 mx-auto rounded-full flex items-center  bg-[#f3f3f3] ">
                <IoIosSearch className='text-2xl font-bold'/>
                <Input 
                    styles={"text-md font-poppins text-slate-700"}
                    type={"text"}
                    placeHolder={"Search"}
                    value={search}
                    onChangeHandler={(e) => setSearch(e.target.value)}
                    />
            </div>
        </div>
  )
}

export default Search