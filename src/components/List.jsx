import React from 'react'
import CoinCard from './CoinCard';

function List  ({allCoins, grid}) {
  return (
    <div className='w-screen min-h-full bg-red-100 px-20 py-5 flex flex-col gap-5'>
        {
            allCoins?.map((coin)=>{
                return(
                    <CoinCard key={coin?.id} coin={coin} grid={grid}/>
                )
            })
        }
    </div>
  )
}

export default List