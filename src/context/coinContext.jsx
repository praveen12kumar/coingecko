import { createContext, useEffect, useReducer, useState } from "react";
import { coinReducer } from "./reducer";
import axios from "axios";
const CoinContext = createContext();

export default CoinContext;


const CoinProvider = ({ children }) => {

    const initialState = {
        allCoins: [],
        coin:{},
        searchedResults: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(coinReducer, initialState);
    const [listView, setListView] = useState(true);
    

    const toggle = () => {
        setListView((prev) => !prev);
    }

    const fetchAllCoins = async () => {
        try {
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1");
            const data = response.data;
            console.log("fetchdata", data);
            dispatch({ type: "FETCH_COINS", payload: data });
        } catch (error) {
            console.log(error);
        }
    }

    const fetchSearchResults = async (searchTerm) => {
        try {
          const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${searchTerm}`);
          const data = await response.json();
        
          const exactMatch = data.coins.filter(
            (coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
          ).splice(0, 10);

          dispatch({type:"SEARCH_RESULT", payload: exactMatch});
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const getCoin = async (id) => {
        try {
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
          const data = response.data;
          dispatch({ type: "GET_COIN", payload: data });
        } catch (error) {
          console.log(error);
        }
      };


    useEffect(()=>{
        fetchAllCoins();
    },[]);

    return (
        <CoinContext.Provider value={{
            ...state,
            dispatch,
            listView,
            toggle,
            fetchSearchResults,
            getCoin,


        }}>
            {children}
        </CoinContext.Provider>
    )
}


export { CoinProvider };