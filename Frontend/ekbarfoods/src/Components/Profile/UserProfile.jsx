import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button } from '@mui/material';


export const UserProfile = () => {
  const handleLogout = () =>{

  }
  return (
    <div className="min-h-[80vh] flex flex-col items-center text-center justify-center">
      <div className="flex flex-col justify-center items-center">
          <AccountBoxIcon sx={{fontSize:"9rem"}}/>
          <h1 className="text-2xl font-bold pt-2 font-mono">
            Shashmitha Bandara
          </h1>
          <p className="text-lg font-extralight font-mono">
            gimansabandara2001@gmail.com
          </p>
          <Button onClick={handleLogout} variant='contained' sx={{margin:"2rem 0rem", padding:".8rem 2rem"}}>Logout</Button>
      </div>
    </div>
  )
}
