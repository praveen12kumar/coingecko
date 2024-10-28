export const coinReducer = (state, {type, payload})=>{

    switch(type){
        case "LOADING":{
            return {...state, loading: true}
        }



        case "default":{
            return state;
        }

    }
}