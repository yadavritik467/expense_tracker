import axios from 'axios';

export const createExpense = (category,amount,description) =>async(dispatch) =>{
    try {

        dispatch({
            type:"expenseRequest"
        })

        const {data} = await axios.post("http://localhost:4500/api/v1/createExpense",{
            category,amount,description
        },
        {
            headers:{
                "Content-Type": "application/json",
            },
            withCredentials:true
        })
        console.log(data)
        dispatch({
            type:"expenseSuccess",
            payload:data.message
        })
        
    } catch (error) {
        console.log(error)
        dispatch({
            type: "expenseFail",
            payload: error.response.data.message,
          });
    }
}
export const getMyExpense = () =>async(dispatch) =>{
    try {

        dispatch({
            type:"getMyExpenseRequest"
        })

        const {data} = await axios.get("http://localhost:4500/api/v1/getAllExpense",
        {
            withCredentials:true
        })
        // console.log(data)
        dispatch({
            type:"getMyExpenseSuccess",
            payload:data
        })
        
    } catch (error) {
        console.log(error)
        dispatch({
            type: "getMyExpenseFail",
            payload: error.response.data.message,
          });
    }
}