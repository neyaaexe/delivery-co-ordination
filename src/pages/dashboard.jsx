import { useState } from "react";
import { useLocation } from "react-router-dom";
function Dashboard()
{
    const location=useLocation(" ");
    const[userdata,setUserdata]=useState(" ");
    function user()
    {
        setUserdata(location.state)
        console.log(userdata)
    }
    return(
        <>
        <div className="text-blue-600">Dashboard page</div>
        <br/><br/>
        <button type="submit" className="bg-blue-800 rounded" onClick={user}>click</button>
        </>
    )
}
export default Dashboard 