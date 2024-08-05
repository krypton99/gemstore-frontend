import { useContext, createContext, ProviderProps, ReactNode, useState, SetStateAction, Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../model/login";

interface AuthType {  
    token : string,
    user : any,
    isLoginFailed : boolean,
    loginAction : (data : Login) => void,
    setIsLoginFailed : Dispatch<SetStateAction<boolean>>
    logOut : () => void,
}  

const defaultContextValue : AuthType = {
    token : "",
    user : null,
    isLoginFailed: true,
    loginAction : (data : Login) => {},
    setIsLoginFailed : () => {},
    logOut : () => {},
}

const AuthContext = createContext(defaultContextValue);

const useUser = () => {
    const [user, setUser] = useState("");
    return [user, setUser];
}

const AuthProvider : React.FC<{children : ReactNode}> =  ({children}) => {
    const [user, setUser] = useState(localStorage.getItem("username")|| "");
    const [isLoginFailed, setIsLoginFailed] = useState(false);
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
            if(res) {
                setIsLoginFailed(false);  
                setUser(res.username);
                setToken(res.token);
                localStorage.setItem("site", res.token);
                localStorage.setItem("username", res.username);
                navigate("/dashboard");
                return;
            }
            throw new Error(res);
        } catch (err) {
            setIsLoginFailed(true);
            console.error(err);
        }
    }

    const logOut = () => {
        setUser("");
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
      };

    return <AuthContext.Provider value={{token, user, loginAction, logOut, isLoginFailed, setIsLoginFailed}}>{children}</AuthContext.Provider>
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}