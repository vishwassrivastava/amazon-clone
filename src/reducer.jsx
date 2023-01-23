import { StateContext } from "./Stateprovider";

export const initialState={
    basket:[],
};

export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0);


const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
          case "REMOVE_FROM_BASKET":
              const index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id
              );
              
            default:
                return state;
    }
}
export default reducer;
