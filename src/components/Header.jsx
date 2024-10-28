import React from 'react';
import { navigationLinks } from '../constants';
import { Link } from 'react-router-dom';
import Button from './Button';
function Header (){
    
  return (
    <div className='w-screen h-[10vh] shadow-md flex items-center justify-between px-10 sticky top-0 z-50'>
        <div className="">
            <h1 className='text-3xl font-poppins font-bold text-slate-800'>Crypto Tracker</h1>
        </div>
        <div className="flex items-center gap-10">
        <ul className="flex items-center gap-10">
        {
            navigationLinks?.map((nav)=>{
                return(
                    <Link className={`text-lg font-poppins font-semibold text-slate-600 transition-colors duration-300 ease-in`} to={nav.path} key={nav.name}>{nav?.name}</Link>
                )
            })
        }
        </ul>
        <Button text={"Dashboard"} styles={"px-6 text-slate-100 bg-[#3A80E9] hover:shadow-xl "}/>
        </div>
    </div>
  )
}

export default Header