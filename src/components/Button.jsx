import React from 'react'

function Button ({text, styles, onClickHandler, value}) {
  return (
    <button 
        onClick={onClickHandler}
        value={value}
        className={`${styles} py-2 font-poppins font-semibold rounded-full transition-all duration-300 ease-in`}>
        {text}</button>
  )
}

export default Button