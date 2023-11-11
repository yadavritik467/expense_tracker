import { createReducer } from "@reduxjs/toolkit";

export const expenseReducer = createReducer(
    {},
    {
        // for creating expense
        expenseRequest:(state) =>{
            state.loading = true;
        },
        expenseSuccess:(state,action) =>{
            state.loading = false;
            state.message = action.payload;
        },
        expenseFail:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        },

        //   for geting Expense 
        getMyExpenseRequest:(state) =>{
            state.loading = true;
        },
        getMyExpenseSuccess:(state,action) =>{
            state.loading = false;
            state.totalExpense = action.payload.totalExpense;
            state.expenseAll = action.payload.expenseAll;
        },
        getMyExpenseFail:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        },

        // for updating Expense

        updateExpenseRequest:(state) =>{
            state.loading = true;
        },
        updateExpenseSuccess:(state,action) =>{
            state.loading = false;
            state.message = action.payload;
        },
        updateExpenseFail:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        },


        // for deleting Expense

        deleteExpenseRequest:(state) =>{
            state.loading = true;
        },
        deleteExpenseSuccess:(state,action) =>{
            state.loading = false;
            state.message = action.payload;
        },
        deleteExpenseFail:(state,action) =>{
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