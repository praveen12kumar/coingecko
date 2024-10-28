import { createContext, useReducer } from "react";
import { coinReducer } from "./reducer";

const CoinContext = createContext();

export default CoinContext;


const CoinProvider = ({ children }) => {

    const initialState = {
        allCoins: [],
        Coin:{},
        loading: false,
    }

    const [state, dispatch] = useReducer(coinReducer, initialState);


    return (
        <CoinContext.Provider value={{
            ...state,
            dispatch,

        }}>
            {children}
        </CoinContext.Provider>
    )
}


export { CoinProvider };