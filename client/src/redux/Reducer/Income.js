import { createReducer } from "@reduxjs/toolkit";

export const incomeReducer = createReducer(
    {},
    {
        // for creating income
        incomeRequest:(state) =>{
            state.loading = true;
        },
        incomeSuccess:(state,action) =>{
            state.loading = false;
            state.message = action.payload;
        },
        incomeFail:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        },

        //   for geting income 
        getMyIncomeRequest:(state) =>{
            state.loading = true;
        },
        getMyIncomeSuccess:(state,action) =>{
            state.loading = false;
            state.totalIncome = action.payload.totalIncome;
            state.incomeAll = action.payload.incomeAll;
        },
        getMyIncomeFail:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        },

        // for updating income

        updateIncomeRequest:(state) =>{
            state.loading = true;
        },
        updateIncomeSuccess:(state,action) =>{
            state.loading = false;
            state.message = action.payload;
        },
        updateIncomeFail:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        },


        // for deleting income

        deleteIncomeRequest:(state) =>{
            state.loading = true;
        },
        deleteIncomeSuccess:(state,action) =>{
            state.loading = false;
            state.message = action.payload;
        },
        deleteIncomeFail:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
          },
          clearMessage: (state) => {
            state.message = null;
          },
    }
)