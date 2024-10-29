import React, { useContext } from 'react'
import Loader from "./Loader";
import CoinContext from '../context/coinContext';

const SearchedResults = ({searchedResults}) => {
    const {loading} = useContext(CoinContext);
  return (
    <div className='absolute top-[6vw] left-1/2 -translate-x-1/2 w-1/2 h-[30vh] bg-slate-200 rounded-xl overflow-scroll'>
              {
                loading ? <Loader/> : 
                  searchedResults?.map((coin)=>{
                    return(
                      <div className="w-full h-[3vw] flex items-center justify-start gap-4 odd:bg-white p-1 px-3">
                        <img className='w-7 h-7 rounded-full' src={coin?.thumb} alt="thumnail" />
                        <h1 className='text-lg font-poppins font-semibold'>{coin?.symbol}</h1>
                        <p className='text-sm font-poppins font-semibold'>{coin?.name}</p>
                       
                      </div>
                    )
                  })
                
              }
          </div>
  )
}

export default SearchedResults