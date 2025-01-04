import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () =>{
    let token = localStorage.getItem('token');
    if(token){
        let jwtPayload = jwtDecode(token);
        console.log(jwtPayload["roles"])
    }
    return localStorage.getItem('token') ? true : false
}

const PrivateRouter = () => {
    return isAuthenticated() ? <Outlet/> : <Navigate to="/login" replace/>
}

export default PrivateRouter;