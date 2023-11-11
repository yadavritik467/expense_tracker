import axios from "axios";



export const loadUser = () => async(dispatch) =>{
    try {

        dispatch({
            type:"loadUserRequest"
        })

        const {data} = await axios.get("http://localhost:4500/api/v1/me",{
            withCredentials:true
        })
        // console.log(data)
        dispatch({
            type:"loadUserSuccess",
            payload:data.user
        })
        
    } catch (error) {
        console.log(error)
        dispatch({
            type: "loadUserFail",
            payload: error.response.data.message,
          });
    }
}


export const logoutProfile = () =>async(dispatch) =>{
    try {
        dispatch({
            type:"logoutRequest"
        })

        const {data} = await axios.get("http://localhost:4500/api/v1/logout",{
            withCredentials:true
        })
        // console.log(data)
        dispatch({
            type:"logoutSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type: "logoutFail",
            payload: error.response.data.message,
          });
    }
}