import React, { useContext, } from 'react'
import Search from '../components/Search';
import CoinContext from '../context/coinContext';
import Grid from '../components/Grid';
import List from '../components/List';
import ToggleGridList from '../components/ToogleGridList';

function Dashboard (){
    
    const {loading, allCoins, listView} = useContext(CoinContext);
  
    
    
  return (
    <div className='w-screen min-h-[calc(100vh-10vh)] flex flex-col gap-8'>
            <Search/>

            <ToggleGridList/>
        <div className="w-full h-full">
        {
            loading ? <Loader /> : (listView ? <List allCoins={allCoins}/> :<Grid allCoins={allCoins} />  )
        }
        </div>

        <div className="text-center">
            // todo pagination
        </div>
    </div>
  )
}

export default Dashboard