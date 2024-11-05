import React, { useState } from 'react'
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";


function CoinDetailCard  ({coin}) {
    const [show, setShow] = useState("");
    const [currentCurrency, setCurrentCurrency] = useState("$");




    const isPositiveChange = coin?.market_data?.market_cap_change_percentage_24h >= 0;
    const changeColorClass = isPositiveChange ? "text-green-600 border-green-600" : "text-red-500 border-red-600";
    const hoverClass = isPositiveChange ? "hover:bg-green-600 hover:border-green-600" : "hover:bg-red-600 hover:border-red-600";

  return (
    <div className='w-[90%] mx-auto mt-4 rounded-3xl h-[15vh] flex items-center justify-evenly bg-slate-100 p-10'>
        <div className="flex items-center gap-10">
            <img src={coin?.image?.small} alt="coin-image" />
            <p className='text-2xl font-poppins font-semibold'>{coin?.name}</p>
        </div>
        <div className="flex items-center gap-8">
        <p className={`px-6 py-1 text-lg font-nunito font-semibold rounded-full border-2 ${changeColorClass} ${hoverClass} hover:text-white transition-colors duration-300 ease-in`}>
                    {coin?.market_data?.market_cap_change_percentage_24h?.toFixed(2)}%
                </p>
                <p className={`px-6 py-2 rounded-full text-lg font-semibold border-2 ${changeColorClass} ${hoverClass} hover:text-white transition-colors duration-300 ease-in`}>
                    {isPositiveChange ? <IoMdTrendingUp /> : <IoMdTrendingDown />}
                </p>
        </div>

        <div className="w-[10vw] relative  ">
            <p className='text-xl font-poppins font-semibold' onMouseEnter={()=>setShow("current_price")} onMouseLeave={()=>setShow(false)} >{currentCurrency}{coin?.market_data?.current_price?.usd}</p>
            <span className={`${show === "current_price" ? "block" : "hidden"} absolute left-4 top-8 text-[10px] font-nunito font-semibold text-slate-100 bg-slate-600 px-[4px] py-[2px] rounded-md text-center `}>Current Price</span>
        </div>

        <div className="w-[15vw] relative">
        <p className='text-xl font-poppins font-semibold' onMouseEnter={()=>setShow("total_volume")} onMouseLeave={()=>setShow(false)}  >{currentCurrency}{coin?.market_data?.total_volume?.usd}</p>
        <span className={`${show === "total_volume" ? "block" : "hidden"} absolute left-4 top-8 text-[10px] font-nunito font-semibold text-slate-100 bg-slate-600 px-[4px] py-[2px] rounded-md text-center `}>Total Volume</span>
        </div>

        <div className="w-[15vw] relative">
        <p className='text-xl font-poppins font-semibold' onMouseEnter={()=>setShow("market_cap")} onMouseLeave={()=>setShow(false)}  >{currentCurrency}{coin?.market_data?.market_cap?.usd}</p>
        <span className={`${show === "market_cap" ? "block" : "hidden"} absolute left-4 top-8 text-[10px] font-nunito font-semibold text-slate-100 bg-slate-600 px-[4px] py-[2px] rounded-md text-center `}>Market Cap</span>
        </div>

    </div>
  )
}

export default CoinDetailCard