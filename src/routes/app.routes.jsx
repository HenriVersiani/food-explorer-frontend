import { Routes, Route } from 'react-router-dom'

import Menu from '../pages/Menu'
import DetailsAdmin from '../pages/DetailsAdmin'
import DetailsUser from '../pages/DetailsUser'
import EditFood from '../pages/EditFood'
import AddFood from '../pages/AddFood'
import LogIn from '../pages/LogIn'
import SignIn from '../pages/SignIn'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="/user" element={<DetailsUser/>}/>
            <Route path="/admin/:id" element={<DetailsAdmin/>}/>
            <Route path="/edit/:id" element={<EditFood/>}/>
            <Route path="/add" element={<AddFood/>}/> 
        </Routes>
    )
}