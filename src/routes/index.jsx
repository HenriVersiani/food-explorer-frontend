import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { ToastContainer } from "react-toastify";

export function Routes(){

const { user } = useAuth()

    return(
        <BrowserRouter>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
           {user?.id ? <AppRoutes/> : <AuthRoutes/>} 
        </BrowserRouter>
    )
}