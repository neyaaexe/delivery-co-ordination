import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
function Registration()
{
    const [email, setEmail] = useState(" ")
    const [password,setPassword] = useState(" ")
    const formSubmit =(e)=>
    {
      e.preventDefault()
      console.log(email,password)
      console.log("you have successfully registered")
    }
 return(
    <>
     <form onSubmit={formSubmit}>
      <input type='email' className="bg-fuchsia-600 border-4  border-emerald-500" required placeholder="enter your email" input={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br/><br/>
      <input type='password' className="bg-fuchsia-600 border-4 border-emerald-500" required placeholder="enter your password" input={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br/><br/>
      <button className="bg-emerald-500 border-8 border-fuchsia-500" > submit </button>
      <br/><br/>
      </form>
    </>
 )
}
export default Registration