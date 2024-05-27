import { CardActions, IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div className='m-5 w-[20rem] '>
        
        <div className='cursor-pointer flex flex-col '>
        <img
          className='w-full h-[25rem] rounded-xl object-cover'
          src="https://ik.imagekit.io/sbj8bzmjnl4/galvin/wp-content/uploads/2023/10/restaurant-spitalfields-market-galvin-french-bistrot-bar-private-dining-events-01a.jpg"
          alt=""
        />
        <div className="flex flex-row justify-between">
        <div className="py-4">
        <h1 className='text-2xl font-extrabold font-mono'>
            French Food
        </h1>
        <p className='disable text-sm text-gray-600'>
            French Food Only
        </p>
        <h2 className="font-semibold">
            Colombo 04
        </h2>
        </div>
        <CardActions>
            <IconButton>
                <DeleteIcon
                sx={{
                    color:"#bd0000"
                }}
                />
            </IconButton>
        </CardActions>
        </div>
        
        
    
            <div className="duration space-y-2">
                <p className="bg-blue-500 mx-4 text-center text-white rounded-xl py-2">
                    September 14 , 2024 <span className='font-bold'>6.00 PM</span>
                </p>
                <p className="bg-red-500 mx-4 text-center text-white rounded-xl py-2">
                    September 14 , 2024 <span className='font-bold'>12.00 AM</span>
                </p>
            </div>
        </div>
    </div>
  )
}
