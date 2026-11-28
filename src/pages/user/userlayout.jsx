import { Link, Outlet } from "react-router-dom"

function User()
{
    return(
        <>
       
         <div className="flex min-h-screen bg-fuchsia-50">
        <aside className="w-64 bg-fuchsia-200 text-black font-bold font-serif flex flex-col">
        <h1 className="text-2xl font-extrabold font-serif mb-10">
                    USER PANEL
        </h1>
        <nav className="flex flex-col gap-4">
            <Link to="/user/dashboard" className="p-3 rounded-lg hover:bg-fuchsia-700">dashboard</Link>
            <Link to="/user/settings" className="p-3 rounded-lg hover:bg-fuchsia-700">settings</Link>
            <Link to="/user/message" className="p-3 rounded-lg hover:bg-fuchsia-700">Message</Link>
            <Link to="/user/deliverydetails" className="p-3 rounded-lg hover:bg-fuchsia-700">delivery status</Link>
        </nav>
        
        </aside>
        <main className="flex-1 p-8">
            <Outlet />
        </main>
        </div>

        </>
    )
}
export default User