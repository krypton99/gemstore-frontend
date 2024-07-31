import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./AuthProvider";

const PrivateRoute : React.FC<{}> = () => {
    const user = useAuth();
    if(!user.token) return <Navigate to = "/login"/>
    return <Outlet/>
}

export default PrivateRoute;