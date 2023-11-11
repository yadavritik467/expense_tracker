import axios from 'axios';

export const createIncome = (source,amount) =>async(dispatch) =>{
    try {

        dispatch({
            type:"incomeRequest"
        })

        const {data} = await axios.post("http://localhost:4500/api/v1/createIncome",{
            source,amount
        },
        {
            headers:{
                "Content-Type": "application/json",
            },
            withCredentials:true
        })
        // console.log(data)
        dispatch({
            type:"incomeSuccess",
            payload:data.message
        })
        
    } catch (error) {
        console.log(error)
        dispatch({
            type: "incomeFail",
            payload: error.response.data.message,
          });
    }
}
export const getMyIncome = () =>async(dispatch) =>{
    try {

        dispatch({
            type:"getMyIncomeRequest"
        })

        const {data} = await axios.get("http://localhost:4500/api/v1/getAllIncome",
        {
            withCredentials:true
        })
        // console.log(data)
        dispatch({
            type:"getMyIncomeSuccess",
            payload:data
        })
        
    } catch (error) {
        console.log(error)
        dispatch({
            type: "getMyIncomeFail",
            payload: error.response.data.message,
          });
    }
}