import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';


export const UserProfile = () => {
  const { auth } = useSelector(store => store) || { auth: { user: null } }; 
  const handleLogout = () =>{

  }
  return (
    <div className="min-h-[80vh] flex flex-col items-center text-center justify-center">
      <div className="flex flex-col justify-center items-center">
          <AccountBoxIcon sx={{fontSize:"9rem"}}/>
          <h1 className="text-2xl font-bold pt-2 font-mono">
            {auth.user?.fullName}
          </h1>
          <p className="text-lg font-extralight font-mono">
          {auth.user?.email}
          </p>
          <Button onClick={handleLogout} variant='contained' sx={{margin:"2rem 0rem", padding:".8rem 2rem"}}>Logout</Button>
      </div>
    </div>
  )
}
