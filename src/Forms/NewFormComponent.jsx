export function NewFormTodo(){
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
    );
}