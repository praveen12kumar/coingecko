import React, { useContext, useState } from 'react'
import Input from '../components/Input';
import { IoIosSearch } from "react-icons/io";
import CoinContext from '../context/coinContext';
import Grid from '../components/Grid';
import List from '../components/List';

function Dashboard (){
    const [search, setSearch] = useState("");
    

    const {loading, allCoins, listView, toggle} = useContext(CoinContext);
  
    
    
  return (
    <div className='w-screen min-h-[calc(100vh-10vh)] flex flex-col gap-8'>
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
        <div className="w-full flex justify-between items-center">
            <div className={`w-1/2 border-b-2 ${!listView ? "border-[#3A80E9]" : ""}`} onClick={toggle}>
                <h1 className='text-lg text-slate-700 text-center font-poppins font-semibold'>Grid</h1>
            </div>
            <div className={`w-1/2 border-b-2 ${listView ? "border-[#3A80E9]" : ""}`} onClick={toggle}>
                <h1 className='text-lg text-slate-700 text-center font-poppins font-semibold'>List</h1>
            </div>
        </div>

        <div className="w-full h-full">
        {
            loading ? <Loader /> : (listView ? <List allCoins={allCoins}/> :<Grid allCoins={allCoins} />  )
        }
        </div>

        <div className="text-center">
            // todo pagination
        </div>
    </div>
  )
}

export default Dashboard