import React from 'react'
//import {useForm} from 'react-hook-form'

const SampleForm = () => {

  //  const form = useForm();
    
  //  const {register} = form;

  //  const {name,ref,onChange,onBlur} = register;

  return (
    <div>
        <form>
            <label htmlFor='username'> Username</label>
            {/* <input type='text' id='username' name={name} ref={ref} onChange={onChange} onBlur={onblur}
             ></input> */}
              {
                //instead of writing all those we cna use spread
              } 
              <input type='text' id='username' {...register('username')} ></input>



            <label htmlFor='email'> Email</label>
            <input type='text' id='email' {...register('email')} ></input>

            <label htmlFor='mobile'> Mobile</label>
            <input type='number' id='mobile' {...register('mobile')} ></input>

             <button>Submit</button>
        </form>
    </div>
  )
}

export default SampleForm