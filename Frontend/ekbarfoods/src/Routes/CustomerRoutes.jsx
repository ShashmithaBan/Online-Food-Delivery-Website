import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Components/Home/Home'
import { Cart } from '../Components/Cart/Cart'
import RestaurantDetail from '../Components/Restaurant/RestaurantDetail'
import { Profile } from '../Components/Profile/Profile'
import { Auth } from '../Components/Auth/Auth'

export const CustomerRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
            {/* like to use /my-profile/orders    ||     /my-profile/payments */}
            
        </Routes>
        <Auth/>
    </div>
  )
}
