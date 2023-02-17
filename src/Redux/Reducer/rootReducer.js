import {combineReducers} from "redux"
import cartReducer from "./cartReducer"
import productReducer from "./ProductReducer"

 const rootReducer= combineReducers({
    cart:cartReducer,
    product:productReducer,
})

export default rootReducer


