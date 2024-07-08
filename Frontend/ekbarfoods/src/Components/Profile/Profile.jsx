import React, { useState } from 'react'
import { ProfileNaviagtion } from './ProfileNaviagtion'
import { Route, Routes } from 'react-router-dom';
import {UserProfile} from './UserProfile'
import { Orders } from './Orders';
import { Address } from './Address';
import { Favourites } from './Favourites';
import { Events } from './Events';



export const Profile = () => {
  const [openSideBar , setOpenSideBar] = useState(false);
  
  return (
    <div className='lg:flex justify-between'>
    <div className="sticky h-[100vh] lg:w-[20%] shadow-lg">
    <ProfileNaviagtion open={openSideBar}/>
    </div>   
    <div className="lg:w-[80%]">
          <Routes>
            <Route path='/' element={<UserProfile />}/>
            <Route path='/orders' element={<Orders />}/>
            <Route path='/address' element={<Address />}/>
            <Route path='/favourites' element={<Favourites />}/>
            <Route path='/payments' element={<UserProfile />}/>
            <Route path='/notifications' element={<UserProfile />}/>
            <Route path='/events' element={<Events />}/>
            

            
          </Routes>
    </div>
    </div>
    
  )
}
