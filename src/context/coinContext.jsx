import { createContext, useEffect, useReducer, useState } from "react";
import { coinReducer } from "./reducer";
import axios from "axios";
const CoinContext = createContext();

export default CoinContext;


const CoinProvider = ({ children }) => {

    const initialState = {
        allCoins: [],
        Coin:{},
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
            dispatch({ type: "FETCH_COINS", payload: data });
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        fetchAllCoins();
    },[]);

    return (
        <CoinContext.Provider value={{
            ...state,
            dispatch,
            listView,
            toggle

        }}>
            {children}
        </CoinContext.Provider>
    )
}


export { CoinProvider };