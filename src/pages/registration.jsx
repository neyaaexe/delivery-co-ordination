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
        navigate("/",{
            state:data
        })
    }
    return(
    <>
        <div className="min-h-screen flex items-center justify-center flex-col bg-fuchsia-600 ">
        <div className="flex flex-col items-center border-2 border-black rounded-xl p-12 bg-fuchsia-200 shadow-lg">
         <div className="text-black font-serif font-bold">Registration Page</div>
         

         <form className="flex flex-col px-4 py-2" onSubmit={handleSubmit(onSubmit)}>
            <label>username</label>
            <input type='text' className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="enter your name" {...register("name")}/>
            <p>{errors.name?.message}</p>
           
            <label>email</label>
            <input type='email' className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="enter you email" {...register("email")}/>
            <p>{errors.email?.message}</p>
            
            <label>password</label>
            <input type='password' className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" required placeholder="enter your password"  {...register("password")}/>
            <p>{errors.password?.message}</p>
           
            <label>age</label>
            <input type='number' className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" required placeholder="enter your age" {...register("age")}/>
            <p>{errors.age?.message}</p>
          
            <label>role</label>
            <select className="border border-gray-300 rounded-md py-2 px-4" name="role" {...register("role")}>
                <option value="">Select your role</option>
                <option value="user">User</option>
                <option value="delivery-man">Delivery Man</option>
                <option value="admin">Admin</option>
            </select>
            <p>{errors.role?.message}</p>
            <button className="bg-emerald-500 rounded" > submit </button>
            
         </form>
         </div>
         </div>
    </>
 )
}
export default Registration