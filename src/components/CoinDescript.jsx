import React from 'react'
import Heading from './Heading'
const CoinDescript = ({text, description}) => {
  return (
    <div>
        <Heading text={text} styles={"text-xl text-slate-800 font-poppins font-semibold "} />
        <p className='text-sm font-nunito' dangerouslySetInnerHTML={{__html: description}}></p>
    </div>
  )
}

export default CoinDescript