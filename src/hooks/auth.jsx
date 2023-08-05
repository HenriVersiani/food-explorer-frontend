import { createContext, useContext } from "react";
import { useState } from "react";
import { api } from "../service/api";
import { toast } from "react-toastify";

export const AuthContext = createContext({});


function AuthProvider({ children }){

    const [data, setData] = useState({})

    async function signIn({email, password}){

        try{
            
            const response = await api.post("/session", {email, password})
            const {user, token} = response.data

            api.defaults.headers.authorization = `Bearer ${token}`
            setData({user,token})

        } catch(error) {

            if(error.response){
                toast.error(error.response.data.message)    
            }else{
                toast.warn("Nao foi Possivel entrar.")
            }

        }
        
    }

    return(
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context;
}

export { AuthProvider, useAuth };