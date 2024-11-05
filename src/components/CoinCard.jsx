import React, { useContext, useState } from 'react';
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";
import CoinContext from '../context/coinContext';
import { useNavigate } from 'react-router-dom';

function CoinCard ({ coin }) {
    const navigate = useNavigate();
    const [currencyType] = useState("$");
    const { listView } = useContext(CoinContext);

    const isPositiveChange = coin?.market_cap_change_percentage_24h >= 0;
    const changeColorClass = isPositiveChange ? "text-green-600 border-green-600" : "text-red-500 border-red-600";
    const hoverClass = isPositiveChange ? "hover:bg-green-600 hover:border-green-600" : "hover:bg-red-600 hover:border-red-600";

    return (
        <div 
            onClick={() => navigate(`/coin/${coin?.id}`)}
            className={`${listView ? "w-full h-[8vw] flex-row items-center" : "w-[20vw] h-[20vw] flex-col items-start"} bg-[#f3f3f3] rounded-xl p-8 flex gap-4 cursor-pointer`}
        >
            <div className={`w-full flex items-center ${listView ? "gap-12" : "gap-4"}`}>
                <img className='w-14 h-14' src={coin?.image} alt="coin" />
                <div className="flex flex-col items-start">
                    <h1 className='text-lg uppercase font-poppins font-semibold'>{coin?.symbol}-USD</h1>
                    <h3 className='text-md font-poppins font-semibold uppercase'>{coin?.name}</h3>
                </div>
            </div>

            <div className={`w-full flex items-center ${listView ? "justify-center" : "justify-start"} gap-8 py-4`}>
                <p className={`px-6 py-1 text-lg font-nunito font-semibold rounded-full border-2 ${changeColorClass} ${hoverClass} hover:text-white transition-colors duration-300 ease-in`}>
                {coin?.market_cap_change_percentage_24h?.toFixed(2)}%
                </p>
                <p className={`px-6 py-2 rounded-full text-lg font-semibold border-2 ${changeColorClass} ${hoverClass} hover:text-white transition-colors duration-300 ease-in`}>
                    {isPositiveChange ? <IoMdTrendingUp /> : <IoMdTrendingDown />}
                </p>
            </div>

            <div className="w-full">
                <h1 className={`text-xl ${changeColorClass} ${listView ? "text-center" : ""} font-poppins font-semibold`}>
                    {currencyType}{coin?.current_price?.toFixed(2)}
                </h1>
            </div>

            <div className="w-full flex flex-col items-start gap-2">
                <h3 className='text-sm text-slate-600 font-nunito'>
                    <span className='text-[1vw] font-poppins text-slate-700'>Total Volume: </span>
                    {currencyType}{coin?.total_volume?.toFixed(2)}
                </h3>
                <h3 className='text-sm text-slate-600 font-nunito'>
                    <span className='text-[1vw] font-poppins text-slate-700'>Market Cap: </span>
                    {currencyType}{coin?.market_cap?.toFixed(2)}
                </h3>
            </div>
        </div>
    );
}

export default CoinCard;
