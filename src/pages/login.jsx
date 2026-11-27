import { BrowserRouter, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login()
{  /*
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const formSubmit= (e)=>
    {
        e.preventDefault();
        console.log(email,password);
        console.log("you have successfully loggeed in");
    }
        */

    const[formdata,setFormdata]=useState({
        username:" ",
        password:" ",
        email:" "
    })
    const handleChange=(e)=>
    {
        setFormdata({...formdata,[e.target.name]:e.target.value})
    }
    const formSubmit=(e)=>
    {
        e.preventDefault()
        console.log(formdata)
        alert("form submitted successfully")
        navigate("/dashboard",
        {state:formdata}
    )
   }
    return(
    <>
        <br/><br/>
        <div className="text-blue-500 font-sans">LOGIN PAGE</div>
         <br/>
        <form onSubmit={formSubmit}>
          <label>username: </label>
          <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="enter your username" required name="username" value={formdata.username} onChange={handleChange} />
          <br/><br/>
          <label>email: </label>
          <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="enter your email" required name="email" value={formdata.email} onChange={handleChange} />
          <br/><br/>
          <label>password: </label>
          <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="enter your password" required name="password" value={formdata.password} onChange={handleChange} />
          <br/><br/>
          <button className="bg-blue-800 text-amber-50 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" type='submit'>LOGIN</button>
        </form>
    </>
    )
}
export default Login 