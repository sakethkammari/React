import React from 'react'
import { useState } from 'react'
import  '../scss/basicformcss.css'

const BasicForm = () => {

    const [username,setUserName] =useState("");
    const [usernameErr,setUserNameErr] = useState(false);

    const [password,setPassword] =useState("");
    const [passwordErr,setPasswordErr] = useState(false);

    const [details,setDetails] = useState(true);
   

    function formHandler(e)
    {
        e.preventDefault();

        if(username.length < 4 || password.length <8)
         setDetails(false);
        else setDetails(true);
        
        

        
        
    }

    function userHandle(e)
    {
        let item = e.target.value;
        if(item.length < 4)
        {
            setUserNameErr(true);
        }
        else{
            setUserNameErr(false);
        }
        setUserName(item);
    }
    function passHandle(e)
    {
        let item = e.target.value;
        if(item.length < 8)
        {
            setPasswordErr(true);
        }
        else{
            setPasswordErr(false);
        }
        
        setPassword(item);
    }

  return (
    <form onSubmit={formHandler}>

        <div className='box'>
       
        <input required className='ip' type='text' id='username' onChange={userHandle} ></input>
        { usernameErr ? <span className='span' >Invalid username! </span> : null }
        
       
        <input required className='ip' type='text' id='password' onChange={passHandle}  ></input>
        { passwordErr ? <span className='span'>Invalid password!</span> : null }
       
        <button>submit</button>

        <div>
        {( ((details && (usernameErr || passwordErr)) ? false : true) ?   <span> Invalid deatils/something went wrong </span> : <span>Success</span>)  } 
 
                      </div>

        </div>
    </form>
  )
}

export default BasicForm