import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerschema } from "../components/FormSchema/registerschema";
function Registration()
{
    const navigate = useNavigate();
    const{register,handleSubmit,formState:{errors}} = useForm({resolver:zodResolver(registerschema) })
    function onSubmit(data)
    {
        console.log(data)
        alert("register success")
        navigate("/")
    }
    return(
    <>
         <div className="text-pink-500 font-sans">Registration Page</div>
         <br/>

         <form onSubmit={handleSubmit(onSubmit)}>
            <label>username: </label>
            <input type='text' className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="enter your name" input={email} {...register("name")}/>
            <p>{errors.name?.message}</p>
            <br/><br/>
            <label>email: </label>
            <input type='email' className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" input={email} placeholder="enter you email" {...register("email")}/>
            <p>{errors.email?.message}</p>
            <br/><br/>
            <label>password: </label>
            <input type='password' className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" required placeholder="enter your password" input={password} {...register("password")}/>
            <p>{errors.password?.message}</p>
            <br/><br/>
            <label>age: </label>
            <input type='number' className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" required placeholder="enter your age" input={password} {...register("number")}/>
            <p>{errors.password?.message}</p>
            <br/><br/>
            <button className="bg-emerald-500 rounded" > submit </button>
            <br/><br/>
         </form>
    </>
 )
}
export default Registration