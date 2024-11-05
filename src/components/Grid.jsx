import React from 'react';
import CoinCard from './CoinCard';


function Grid({ allCoins}) {
  return (
    <div className={`w-full mt-5 flex flex-wrap items-center justify-center gap-6  `}>
      {allCoins && allCoins.length > 0 ? (
        allCoins.map((coin) => (
          <CoinCard key={coin?.id} coin={coin} />
        ))
      ) : (
        <p className="text-2xl font-poppins font-semibold text-gray-700 text-center w-full">No coins available.</p>
      )}
    </div>   
  );
}

export default Grid;
