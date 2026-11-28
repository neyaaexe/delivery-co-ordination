import { BrowserRouter, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
function Login()
{  
    const location=useLocation();
    const navigate = useNavigate();
    const[formdata,setFormdata]=useState({
        username:" ",
        password:" ",
        email:" ",
        role:" ",
    })
    const handleChange=(e)=>
    {
        setFormdata({...formdata,[e.target.name]:e.target.value})
    }
    const formSubmit=(e)=>
    {
        e.preventDefault()
        const registerdata = location.state
        console.log(formdata)
        console.log(registerdata)
        alert("form submitted successfully")
        if( registerdata.name === logindata.username &&
        registerdata.email === logindata.email &&
        registerdata.password === logindata.password
        && registerdata.role === logindata.role)
        {
            if(logindata.role === "user")
            {
                navigate("/user",
                   { state:formdata}
                )
            }
            else if(logindata.role === "delivery-man")
            {
                navigate("/delivery",
                   { state:formdata}
                )
            }
            else if(logindata.role === "admin")
            {
                navigate("/admin",
                   { state:formdata}
                )
            }
        }
    
   }
    return(
    <>
        <div className="min-h-screen flex items-center justify-center flex-col bg-fuchsia-600 ">
        <div className="flex flex-col items-center border-2 border-black rounded-xl p-10 bg-fuchsia-200 shadow-lg">
        <div className="text-black font-serif font-bold">LOGIN PAGE</div>
       
        <form className="flex flex-col gap-3 p-2" onSubmit={formSubmit}>
          <label>username</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="enter your username" required name="username" value={formdata.username} onChange={handleChange} />
        
          <label>email</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" placeholder="enter your email" required name="email" value={formdata.email} onChange={handleChange} />
       
          <label>password</label>
          <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="enter your password" required name="password" value={formdata.password} onChange={handleChange} />
          
          <label>role</label>
          <select className="border border-gray-300 rounded-md py-2 px-4" name="role" values={formdata.role} onChange={handleChange}>
                <option value="">Select your role</option>
                <option value="user">User</option>
                <option value="delivery-man">Delivery Man</option>
                <option value="admin">Admin</option>
          </select>
          <button className="bg-blue-800 text-amber-50 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" type='submit'>LOGIN</button>
          <p className = "text-sm text-gray-800 text-center mt-4">
            Not yet registered?
            <button type="button" className="text-blue-600 hover:underline ml-1 font-semibold" onClick={()=> navigate("/registration")}>
                Register
            </button>
          </p>
        </form>
        </div>
        </div>
    </>
    )
}
export default Login 