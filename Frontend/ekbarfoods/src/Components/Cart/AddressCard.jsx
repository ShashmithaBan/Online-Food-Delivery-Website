import React from 'react'
import { Cart } from './Cart'
import { Button, Card } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export const AddressCard = ({item,showButton , handleSelectAddress}) => {
    const handleSelectAdress=()=>{

    }
  return (
    <Card className=' gap-5 w-64 p-5' >
        <div className="icon  flex justify-center ">
        <HomeRoundedIcon color='primary'/>
        </div>
        
         <div className="p-2 space-y-3 ">
         <h2 className='flex justify-center items-center text-gray-600 font-semibold'>Home</h2>
         <p className='text-base text-gray-400 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut unde beatae. Accusamus repellat deleniti, 
         </p>
        {showButton && 
        <Button variant = "outlined" fullWidth  onClick={()=>handleSelectAddress(item)}>
            Select
         </Button>}
        </div>

    </Card>
  )
}
