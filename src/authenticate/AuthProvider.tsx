import { useContext, createContext, ProviderProps, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../model/login";

interface AuthType {  
    token : string,
    user : any,
    isLoginFailed : boolean,
    loginAction : (data : Login) => void,
    logOut : () => void,
}  

const defaultContextValue : AuthType = {
    token : "",
    user : null,
    isLoginFailed: true,
    loginAction : (data : Login) => {},
    logOut : () => {},
}

const AuthContext = createContext(defaultContextValue);



const AuthProvider : React.FC<{children : ReactNode}> =  ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoginFailed, setIsLoginFailed] = useState(true);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();
    const loginAction = async (data : Login) => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            const res = await response.json();
            if(res.token) {
                console.log(res)
                setUser(res.username);
                setToken(res);
                localStorage.setItem("site", res);
                navigate("/dashboard");
                setIsLoginFailed(false);  
                return;
            }
            setIsLoginFailed(true);
            throw new Error(res);
        } catch (err) {
            console.error(err);
        }
    }

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
      };

    return <AuthContext.Provider value={{token, user, loginAction, logOut, isLoginFailed}}>{children}</AuthContext.Provider>
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}