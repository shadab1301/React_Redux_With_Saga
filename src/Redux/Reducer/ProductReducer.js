// import { ADD_TO_CART, REMOVE_FROM_CART , SET_PRODUCT_LIST} from "../Constant/Constant";

// const initialState=[];
//  const productReducer=(state=initialState,action)=>{
//         console.log("cart reducer called automatically",action)
//         // console.log(action.data)
      
//     switch(action.type){
//         case SET_PRODUCT_LIST : return [...state,action.data];
//             break;
//         default : return state
//     }
// }

// export default productReducer



// import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"
import { ADD_TO_CART, REMOVE_FROM_CART , SET_PRODUCT_LIST} from "../Constant/Constant";



export const ProductReducer = (data = [], action) => {
    switch (action.type) {
        case  SET_PRODUCT_LIST:
            console.log("redecuer called ", action)
        // case ADD_TO_CART:
        //     console.warn("ADD_TO_CART condition ", action)
        //     return [action.data, ...data]
        // case REMOVE_FROM_CART:
        //     console.warn("REMOVE_FROM_CART condition ", action);
        //     data.length= data.length? data.length-1:[]
        //     return [...data]
               
        default:
            return data
    }
}


export default ProductReducer