import { Link, Outlet } from "react-router-dom"

function User()
{
    return(
        <>
        <div className="text-fuchsia-800 font-extrabold font-serif">USER PAGE</div>
        <nav>
            <Link to={"/user/dashboard"}>dashboard</Link>
            <Link to={"/user/settings"}>settings</Link>
            <Link to={"/user/message"}>Message</Link>
            <Link to={"/user/deliverydetails"}>Message</Link>
        </nav>
        <Outlet/>
        </>
    )
}
export default User