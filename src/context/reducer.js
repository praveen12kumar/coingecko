export const coinReducer = (state, {type, payload})=>{

    switch(type){
        case "LOADING":{
            return {...state, loading: true}
        }
        case "FETCH_COINS":{
            return {...state, allCoins: payload, loading: false}
        }
        case "SEARCH_RESULT":{
            return {...state, searchedResults: payload, loading: false}
        }
        case "GET_COIN":{
            return {...state, coin: payload, loading: false}
        }




        case "default":{
            return state;
        }

    }
}