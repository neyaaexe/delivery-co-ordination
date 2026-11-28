import { useNavigate } from "react-router-dom"

function Landing()
{
    const navigate=useNavigate();
    function Click()
    {
        navigate("/login")
    }

    return(
        <div className="bg-fuchsia-200 min-h-screen flex  flex-col items-center justify-center font-serif">
            <h1 className="text-3xl font-bold">MISSED DELIVERY CO-ORDINATION APP</h1>
            <br/><br/>
            <button onClick={Click} type="button" className="text-3xl p-2 border-2 rounded bg-fuchsia-600">login</button>
        </div>
    )

}
export default Landing 
