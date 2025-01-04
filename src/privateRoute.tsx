import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () =>{
    return localStorage.getItem('token') ? true : false
}

const PrivateRouter = () => {
    return isAuthenticated() ? <Outlet/> : <Navigate to="/login" replace/>
}

export default PrivateRouter;