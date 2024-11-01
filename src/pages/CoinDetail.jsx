import { useEffect, useContext } from 'react';
import React from 'react'
import { useParams } from 'react-router-dom'
import CoinContext from '../context/coinContext';
import List from '../components/List';
import CoinCard from '../components/CoinCard';

function CoinDetail () {
    const {id} = useParams();

    const {getCoin, coin} = useContext(CoinContext);

    console.log("coin", coin);

    useEffect(()=>{
        getCoin(id)
    },[id])


  return (
    <div>
        
    </div>
  )
}

export default CoinDetail;