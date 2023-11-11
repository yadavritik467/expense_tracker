import axios from 'axios';
import React, { useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const SignIn = () => {

  

    // const  getUser = async() =>{
    //     const {data} = await axios.get("http://localhost:4500/api/v1/me",{
    //         withCredentials:true
    //     })
    //     console.log(data)
    // }

    // useEffect(()=>{
    //     getUser();
    // },[])
    const handleGoogleLogin = () => {
        //   setLoad(true)
            window.location.href = "http://localhost:4500/api/v1/google";
         
        //   setLoad(false)
        };
  return (
    <div className='google'>
      <div>
       <p>Welcome to my expense tracker app !!🙂 <br /> <b>Try not to worry this is just a test app. <br /> No one is going to track your id. Your data is completely on safe hands..  <br /> your data will be completely deleted after you delete your account . .  <br /> </b> Feel free to use  </p> <br />
       <Link  onClick={handleGoogleLogin}>Login with Google <FcGoogle style={{justifyContent:"center", alignItems:"center", fontSize:"25px", cursor:"pointer",  }} /></Link>
      </div>
    </div>
  )
}

export default SignIn
