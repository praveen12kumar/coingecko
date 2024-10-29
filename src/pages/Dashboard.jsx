import React, { useContext, useState } from 'react'
import Search from '../components/Search';
import CoinContext from '../context/coinContext';
import Grid from '../components/Grid';
import List from '../components/List';
import ToggleGridList from '../components/ToogleGridList';
import SearchedResults from '../components/SearchedResults';
import Loader from '../components/Loader';
function Dashboard (){
    const [search, setSearch] = useState("")
    const {loading, allCoins, listView, searchedResults} = useContext(CoinContext);
    
  return (
    <div className='w-screen min-h-[calc(100vh-10vh)] flex flex-col gap-8 relative '>
            <Search search={search} setSearch={setSearch}/>
            {
              search && <SearchedResults searchedResults={searchedResults}/>
            }
            <ToggleGridList/>
        <div className="w-full min-h-full">
        {
            loading ? <Loader /> : 
            listView ? <List allCoins={ allCoins}/> : <Grid allCoins={allCoins}/>
        }
        </div>

        <div className="text-center">
            // todo pagination
        </div>
    </div>
  )
}

export default Dashboard