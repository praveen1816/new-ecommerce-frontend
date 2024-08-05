import React, { useState } from 'react';

const LoginSignup = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [state, setState] = useState("Login");
  const [formData,setFormData]= useState({
    username:"",
    password:"",
    email:""
  })
  const toggleState = () => {
    setState(state === "Login" ? "Sign Up" : "Login");
  };

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login =async ()=>{
   console.log("Login Function Executed",formData);
   let responseData;
   await fetch(`${apiUrl}/login`,{
     method:'POST',
     headers:{
       Accept:'application/form-data',
       'Content-Type':'application/json',
     },
     body: JSON.stringify(formData),
   }).then((response)=>response.json()).then((data)=>responseData=data)

   if(responseData.success){
     localStorage.setItem('auth-token',responseData.token);
     window.location.replace("/");
   }
   else{
     alert(responseData.errors)
   }
  }
  const signup =async ()=>{
    console.log("Signup Function Executed",formData);

    let responseData;
    await fetch(`${apiUrl}/signup`,{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-white shadow-lg rounded-lg'>
        <h1 className='text-3xl font-extrabold mb-8 text-gray-800'>{state}</h1>
        <div className='space-y-4'>
          {state === "Sign Up" && (
            <input name='username' value={formData.username} onChange={changeHandler}
              type="text" 
              placeholder='Your Name' 
              className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
            />
          )}
          <input name='email' value={formData.email} onChange={changeHandler}
            type="email" 
            placeholder='Email Address' 
            className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
          />
          <input name='password' value={formData.password} onChange={changeHandler}
            type="password" 
            placeholder='Password' 
            className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
          />
        </div>
        <button  onClick={()=>{state=="Login"?login():signup()}}
          className='w-full mt-6 px-4 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300'
        >
          Continue
        </button>
        <p className='mt-4 text-center text-gray-600'>
          {state === "Login" ? 
            <>Don't have an account? <span onClick={toggleState} className='text-red-600 font-medium cursor-pointer hover:underline'>Sign up here</span></>
            : 
            <>Already have an account? <span onClick={toggleState} className='text-red-600 font-medium cursor-pointer hover:underline'>Login here</span></>
          }
        </p>
        <div className='flex items-start mt-8'>
          <input 
            type="checkbox" 
            id="agree" 
            className='mr-3 accent-red-600 mt-1'
          />
          <label htmlFor="agree" className='text-gray-700'>
            By continuing, I agree to the <span className='text-red-600 font-medium cursor-pointer hover:underline'>terms of use</span> & <span className='text-red-600 font-medium cursor-pointer hover:underline'>privacy policy</span>.
          </label>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
