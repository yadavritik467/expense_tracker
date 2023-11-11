import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./redux/Reducer/User";
import { incomeReducer } from "./redux/Reducer/Income";
import { expenseReducer } from "./redux/Reducer/Expense";


const store = configureStore({
    reducer:{
      auth:authReducer,
      income:incomeReducer,
      expense:expenseReducer,
    }
})

export default store;