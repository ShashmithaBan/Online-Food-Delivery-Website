import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Admin } from '../AdminComponent/Admin'
import { CreateRestaurantForm } from '../AdminComponent/CreateRestaurantForm'


export const AdminRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/*' element={false?<CreateRestaurantForm/>:<Admin/>}/>

            
        </Routes>
    </div>
  )
}
