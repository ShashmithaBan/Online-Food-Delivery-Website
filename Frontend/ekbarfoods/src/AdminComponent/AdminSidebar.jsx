import React from 'react'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Components/State/Authentication/Action';


const menu = [
  {title:"Dashboard" , icon:<SpaceDashboardIcon/>},
  {title:"Orders" , icon:<ShoppingBagIcon/>},
  {title:"Menu" , icon:<MenuIcon/>},
  {title:"Food Category" , icon:<RestaurantMenuIcon/>},
  {title:"Ingredients" , icon:<FastfoodIcon/>},
  {title:"Details" , icon:<PrivacyTipIcon/>},
  {title:"Events" , icon:<EventIcon/>},
  {title:"Logout" , icon:<LogoutIcon/>}
]

export const AdminSidebar = (open,handleClose) => {
  const isSmallScreen= useMediaQuery("(max-width:1080)")
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleNavigate = (item) =>{
    if(item.title==="Logout"){
     dispatch(logout());
     navigate('/')
    }
    else{
      navigate(`/my-profile/${item.title.toLowerCase()}`)
    }
   
  }
  return (   
<div className='w-[100vw]'>
      <Drawer
      variant={isSmallScreen ? "temporary" : "permanent"}//In here I used this cause if screen is smaller in size the drawer can be opened and closed.But if its not drawer is opened.
      onClose={handleClose}//This is used to closed the drawer
      open={open}
      anchor='left'
      sx={{ zIndex: 1, position: 'sticky'}} 

    >
      <div className="flex flex-col w-[50vw] lg:w-[20vw] h-[100vh] justify-center items-center text-xl gap-8 text-gray-700 ">
        {menu.map((item, i) => (
          <>
            <div onClick={()=>handleNavigate(item ) } className="flex item-center cursor-pointer space-x-5 px-5">
              {item.icon}
              <span>{item.title}</span>
            </div>
            {i !== menu.length - 1 && <hr className="border-gray-500 w-full" />}
          </>
        ))}
        
      </div>
    </Drawer>

    </div>
 )
}
