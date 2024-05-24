import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Chip, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const CartItem = () => {
  return (
    <>
    <div className="lg:flex item-center lg-space-x-5">
            <div className="">
            <img
          className='w-[5rem] h-[5rem] object-cover rounded-full'
          src="https://cdn.pixabay.com/photo/2024/04/26/05/52/cheeseburger-8721189_1280.png"
          alt=""
        />
            </div>
            <div className="flex item-center justify-between lg:w-[70%]">
                <div className="w-full space-y-1 lg:space-y-3 ">
                    <p className='px-8'>Biriyani</p>
                    <div className="flex justify-between item-center px-4">
                        <div className="flex item-center space-x-1">
                            <IconButton>
                                <RemoveCircleIcon/>
                            </IconButton>
                            <div className="w-5 h-5 text-xs flex items-center justify-center">
                                {5}
                            </div>
                            <IconButton>
                                <AddCircleIcon/>
                            </IconButton>
                        </div>
                    </div>


                </div>
                
            </div>      
            <p>LKR 500</p> 
    </div>
    <div className="pt-1 space-x-2 space-y-2">
    {[1,1,1,1].map((item)=> <Chip sx={{ backgroundColor: "green", color: "white" }} label={"bread"} />)}
</div>
    </>
    

  )
}
