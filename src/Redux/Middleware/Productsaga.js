// import axios from "axios";
// import {put, takeEvery,call} from "redux-saga/effects"
// import { callProductAPI } from "../../Components/API/Product.api";
// import { GET_PRODUCT_LIST_ACTION } from "../Action/Action";
// import { ADD_TO_CART, GET_PRODUCT_LIST, SET_PRODUCT_LIST} from "../Constant/Constant"




// function* getProducts() {
//     // debugger
//     // let productListRes = yield call(callProductAPI);
//     // console.log("productListRes Sandeep",productListRes)
//     // let arr=["abc"]
//     // yield put({type: SET_PRODUCT_LIST,arr})
//     let data = yield fetch('https://fakestoreapi.com/products');
//     data = yield data.json();
//     yield put({type: SET_PRODUCT_LIST, data})
// }

// export default function* productSaga(){
//     console.log("Saga called");
//     yield takeEvery(GET_PRODUCT_LIST,getProducts);
//     // takeEvery(SET_PRODUCT_LIST,getProducts)

// }





// import { takeEvery, put } from 'redux-saga/effects'
// // import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';
// import { GET_PRODUCT_LIST, SET_PRODUCT_LIST} from "../Constant/Constant"

// import axios from 'axios';

// function* getProducts() {
//     let data = yield axios('https://fakestoreapi.com/products');
//     data =  data.data;
//     console.warn("action is called", data)
//     yield put({type: SET_PRODUCT_LIST, data})
// }

// function* productSaga() {
//     yield takeEvery(GET_PRODUCT_LIST, getProducts)
// }

// export default productSaga;




import { takeEvery, put } from 'redux-saga/effects'
import { GET_PRODUCT_LIST, SET_PRODUCT_LIST} from '../Constant/Constant';
import axios from 'axios';

// function* getProducts() {
//     let data = yield axios('https://fakestoreapi.com/products');
//     data =  data.data;
//     console.warn("action is called", data)
//     yield put({type: SET_PRODUCT_LIST, data})
// }

function * getProductsFunction(){
    let data = yield axios('https://fakestoreapi.com/products');
    data =  data.data;
    yield put({type: SET_PRODUCT_LIST, data})
}

function* productSaga() {
    yield takeEvery(GET_PRODUCT_LIST, getProductsFunction)
}

export default productSaga;








