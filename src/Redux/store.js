// import {createStore} from "redux"
// import rootReducer from "./Reducer/rootReducer"

//  const store=createStore(rootReducer)
// export default store




// Using Redux-Saga
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./Reducer/rootReducer"

import productSaga from "./Middleware/Productsaga"
// import createSagaMiddleware from "@redux-saga/core"
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware=createSagaMiddleware();

const store=configureStore({
   reducer: rootReducer,
   middleware:()=>[sagaMiddleware]

})
sagaMiddleware.run(productSaga);


export default store