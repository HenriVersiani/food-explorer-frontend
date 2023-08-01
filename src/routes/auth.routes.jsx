import { Routes, Route } from 'react-router-dom'

import LogIn from '../pages/LogIn'
import SignIn from '../pages/SignIn'

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/login" element={<LogIn/>}/> 
            <Route path="/signIn" element={<SignIn/>}/> 
        </Routes>
    )
}