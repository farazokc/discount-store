import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Logout = () =>{
    const nav = useNavigate();
    
    return (
        <div>
            <button onClick={() => {
                auth.signOut();
                nav("/");
            }}>Logout</button>
        </div>
    )
}

export default Logout;