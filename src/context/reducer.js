export const coinReducer = (state, {type, payload})=>{

    switch(type){
        case "LOADING":{
            return {...state, loading: true}
        }
        case "FETCH_COINS":{
            return {...state, allCoins: payload, loading: false}
        }




        case "default":{
            return state;
        }

    }
}