import { Routes, Route } from 'react-router-dom'

import Menu from '../pages/Menu'
import Details from '../pages/Details'
import EditFood from '../pages/EditFood'
import AddFood from '../pages/AddFood'


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="/user/:id" element={<Details/>}/>
            <Route path="/admin/:id" element={<Details/>}/>
            <Route path="/edit/:id" element={<EditFood/>}/>
            <Route path="/add" element={<AddFood/>}/> 
        </Routes>
    )
}