import { ADD_TO_CART, REMOVE_FROM_CART ,GET_PRODUCT_LIST} from "../Constant/Constant";

const initialState=[];
 const cartReducer=(state=initialState,action)=>{
        // console.log("cart reducer called automatically",action)
        // console.log(action.data)
      
    switch(action.type){
        case ADD_TO_CART : return [...state,action.data]
            break;
        case REMOVE_FROM_CART: return "remove from cart called";
            break;
        default : return []
    }
}

export default cartReducer