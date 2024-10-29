import React from 'react';
import { navigationLinks } from '../constants';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
function Header (){
    
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/dashboard');
    }


  return (
    <div className='w-[100vw] h-[10vh] shadow-md bg-white flex items-center justify-between px-10 sticky top-0 z-50'>
        <div className="w-[20vw] h-full flex items-center justify-center">
          <img src={logo} alt="" />
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
        <Button onClickHandler={onClickHandler} text={"Dashboard"} styles={"px-6 text-slate-100 bg-[#3A80E9] hover:shadow-xl "}/>
        </div>
    </div>
  )
}

export default Header