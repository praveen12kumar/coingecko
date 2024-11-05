import { useEffect, useContext, useState } from 'react';
import React from 'react'
import { useParams } from 'react-router-dom'
import CoinContext from '../context/coinContext';
import CoinDetailCard from '../components/CoinDetailCard';
import LineChart from '../components/LineChart';
import Dropdown from '../components/Dropdown';
import { gettingDate } from '../utils';
import Button from '../components/Button';
import Loader from '../components/Loader';
function CoinDetail () {
    const {id} = useParams();
    const [charData, setCharData] = useState({labels:[], datasets:[{}]})
    const [days, setDays] = useState(30);
    const [priceType, setPriceType] = useState("prices")
    const {getCoin, coin, getGraphData, graphData, loading} = useContext(CoinContext);

    useEffect(()=>{
        getCoin(id)
    },[id])

    const onClickHandler = (e)=>{
      setPriceType(e.target.value)
    }

    useEffect(()=>{
        getGraphData(id, days, priceType, setCharData);
    },[id, days,priceType])

  return (
    <>
      {
        loading ? <Loader/> : 
        (
          <div className='w-screen h-full flex flex-col gap-10'>
            <CoinDetailCard coin={coin}/>
            <div className="w-[90%] p-8 mx-auto flex items-center justify-evenly bg-slate-100 rounded-2xl">
              <div className=" flex items-center">
                <Dropdown days={days} setDays={setDays} priceType={priceType} setPriceType={setPriceType}/>
              </div>
              <div className="flex items-center gap-6">
                  <Button text="Price" value="prices" onClickHandler={onClickHandler} styles={`${priceType === "prices" ? "bg-[#3A80E9] text-white border-none" : ""} w-[120px] border-2 border-blue-700 `} />
                  <Button text="Market Cap" value="market_caps" onClickHandler={onClickHandler} styles={` ${priceType === "market_caps" ? "bg-[#3A80E9] text-white border-none" : ""} w-[120px] border-2 border-blue-700 `}/>
                  <Button text="Volume" value="total_volumes" onClickHandler={onClickHandler} styles={` ${priceType === "total_volumes" ? "bg-[#3A80E9] text-white border-none" : ""} w-[120px] border-2 border-blue-700 `}/>
              </div>
            </div>
            <div className="w-[90%] mx-auto border border-slate-100 p-8 bg-slate-100 rounded-2xl">
                <LineChart chartData={charData} priceType={priceType} />
            </div>
    </div>
        )
      }
    </>
  )
}

export default CoinDetail;