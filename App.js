import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';
import './CSS/style.css';
import {useState} from 'react';
import { validation } from './Components/Validation';

function App() {

  const [values,setValues] = useState({
    name: '',
    email: '',
    password:'',
  });

  const [error,setError] = useState({});

  function inputHandler(e) {
    const { name, value } = e.target;
    const newObj = { ...values, [name]: value };
    console.log(newObj);
    setValues(newObj);
  }

  function handleForm(e){
      e.preventDefault();
      setError( validation(values));
  }

  return (
    <>
              <form className="basic-form" onSubmit={handleForm}>
                <div>

                    <label htmlFor="username">User name</label>
                    <input type='text' id='username' name='name' onChange={inputHandler}></input>
                    {error.name && <p style={{color: 'red'}}>{error.name}</p> }

                    <label htmlFor="email">Email</label>
                    <input type='text' id='email' name='email' onChange={inputHandler}></input>
                    {error.email && <p style={{color:'red'}}>{error.email}</p> }

                    <label htmlFor="password">Password</label>
                    <input type='password' id='password' name='password' onChange={inputHandler}></input>
                    {error.password && <p style={{color:'red'}}>{error.password}</p>}
                   
                   <div className='btn'>
                    <button type='submit' className='btn btn-primary' >submit</button>
                    </div>
                    </div>
              </form>
     </>
  );
}

export default App;
