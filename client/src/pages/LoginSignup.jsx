import React, { useState } from 'react'
import './styles/LoginSignup.css'
import toast from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext';


const LoginSignup = () => {
   const {setAuthUser} = useAuthContext();
    const [state,setState] = useState('login');
    const [data,setData]  = useState({
       fullName:"",
       username:"",
       password:"",
       confirmPassword:""
    })
    const handleChange = (e) =>{
       setData({...data, [e.target.name]:e.target.value})
    }
    const handleFormSubmission = (e) => {
       e.preventDefault();
       {state==='login' ? login()   : signup()}
    }

    
   const login = async (req,res) => {
      try{
      const response = await fetch("http://localhost:5000/api/auth/login",
               {
               method:'POST',
               headers:{
               'Content-Type' :'application/json',
               },
               body: JSON.stringify(data),
               }       
      );
      if(!response.ok){
         toast.error("Invalid username or password");
         console.log(`bad request : ${response.status} ${response.statusText}`);
         return
      }
      console.log("response" ,response);
      const resdata = await response.json();
      console.log("data",resdata);
   
      localStorage.setItem('usertoken',JSON.stringify(resdata));
      toast.success("login sucessful");
      setAuthUser(resdata);
      }
      catch(error) {
         console.log("error in fetching:",error.message);
      }
   }
   
   const signup = async (req,res) => {
         try{
         const response = await fetch("http://localhost:5000/api/auth/signup",{
                  method:'POST',
                  headers : {
                     'Content-Type':'application/json'
                     
                  },
                  body:JSON.stringify(data)
         })
         const resdata = await response.json();
         localStorage.setItem('jwt',JSON.stringify(data));
         toast.success('Signup successful');
         setState('login');
         }
         catch(error) {
            console.log("error in fetching:",error.message);
         }
         }
    


  return (
    <div className='auth-body'>
    <div className='auth'>
        <form 
        onSubmit={handleFormSubmission}
        >
            {state==='signup'?
            <div>
               <label>FullName</label>
               <input type='text'
                placeholder='Enter your fullname'
                name='fullName'
                value={data.fullName} 
                onChange={ handleChange}></input> 
            </div> : ""
            }
            
            <label>UserName</label>
            <input type='text' placeholder='Enter userName' name= 'username' value={data.username} onChange={ handleChange} aria-required></input>
            <label>Password</label>
            <input type='text' placeholder='Enter password'name='password' value={data.password} onChange={ handleChange} required></input>
            {state==='signup'?
            <div>
               <label>Confirm Password</label>
               <input type='text' placeholder='Confirm Password' name='confirmPassword' value={data.confirmPassword} onChange={ handleChange}></input> 
            </div> : ""
            }
            <button type='submit'
            > Submit
            </button>
           <p> 
            {state==='login'?
            <span  className='span' onClick =  { () => { setState('signup')}}>Don't have an account?</span>
            : <span className='span' onClick = { () => {setState('login')}}>Already have an Account?</span>
             }
           </p>
        </form>
    </div>
    </div>
  )
}

export default LoginSignup;
