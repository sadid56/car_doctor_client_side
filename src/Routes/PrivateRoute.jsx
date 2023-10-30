import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    // console.log(location.pathname);

    if(loading){
        return <h3 className="text-center ">Loading...</h3>
    }

    if(user){
        return children;
    }


    return <Navigate to='/login' state={location.pathname}></Navigate>
}
 
export default PrivateRoute;