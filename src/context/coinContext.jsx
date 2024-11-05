import { createContext, useEffect, useReducer, useState } from "react";
import { coinReducer } from "./reducer";
import axios from "axios";
import { gettingDate } from "../utils";

const CoinContext = createContext();

export default CoinContext;


const CoinProvider = ({ children }) => {

    const initialState = {
        allCoins: [],
        coin:{},
        searchedResults: [],
        loading: false,
        graphData:[]
    }

    const [state, dispatch] = useReducer(coinReducer, initialState);
    const [listView, setListView] = useState(true);
    

    const toggle = () => {
        setListView((prev) => !prev);
    }

    const fetchAllCoins = async () => {
        try {
            dispatch({ type: "LOADING" });
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1");
            const data = response.data;
            dispatch({ type: "FETCH_COINS", payload: data });
        } catch (error) {
            console.log(error);
        }
    }

    const fetchSearchResults = async (searchTerm) => {
        try {
          dispatch({ type: "LOADING" });
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
          dispatch({ type: "LOADING" });
          const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
          const data = response.data;
          dispatch({ type: "GET_COIN", payload: data });
        } catch (error) {
          console.log(error);
        }
      };

      const getGraphData = async (id, days, priceType, setCharData) => {
        try {
          console.log("priceType", priceType);
          dispatch({ type: "LOADING" });
          const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
          );
          
          let data;
          if (priceType === "market_caps") {
            data = response.data.market_caps;
          } else if (priceType === "total_volumes") {
            data = response.data.total_volumes;
          } else if (priceType === "prices") {
            data = response.data.prices;
          }
          
          dispatch({ type: "GET_GRAPH_DATA", payload: data });
      
          // Directly set chart data after fetching graph data
          setCharData({
            labels: data.map((item) => gettingDate(item[0])),
            datasets: [{
              borderWidth: 1,
              fill: true,
              data: data.map((item) => item[1]),
              backgroundColor: 'rgba(58, 128, 233, 0.1)',
              tension: 0.25,
              borderColor: '#3a80e9',
              pointRadius: 0,
              yAxisID: "crypto1"
            }]
          });
        } catch (error) {
          console.error("Error fetching graph data:", error.message);
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
            getGraphData,

        }}>
            {children}
        </CoinContext.Provider>
    )
}


export { CoinProvider };