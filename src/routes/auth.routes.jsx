import { Routes, Route } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import LogIn from '../pages/LogIn'

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<LogIn/>}/> 
            <Route path="/signin" element={<SignIn/>}/> 
        </Routes>
    )
}