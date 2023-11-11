import { createReducer } from "@reduxjs/toolkit";

export const authReducer = createReducer(
    {
        loading : false,
        isAuthenticated : false,
        user : null, 
        error: null,
        message: null
    },
    {
        // for sign in
        loadUserRequest:(state) =>{
            state.loading = true;
            state.isAuthenticated = false;
            state.user = null;
        },
        loadUserSuccess:(state,action) =>{
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        loadUserFail:(state,action) =>{
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        },

        //   for logout 
        logoutRequest:(state) =>{
            state.loading = true;
        },
        logoutSuccess:(state,action) =>{
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
        },
        logoutFail:(state,action) =>{
            state.loading = false;
            state.isAuthenticated = false;
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