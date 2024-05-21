import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { IconButton } from '@mui/material';

export const CartItem = () => {
  return (
    <div className="lg:flex item-center lg-space-x-5">
            <div className="">
            <img
          className='w-[5rem] h-[5rem] object-cover rounded-full'
          src="https://cdn.pixabay.com/photo/2024/04/26/05/52/cheeseburger-8721189_1280.png"
          alt=""
        />
            </div>
            <div className="flex item-center justify-between lg:w-[70%]">
                <div className="flex item-center space-x-1">
                    <p>Biriyani</p>
                    <div className="flex justify-between item-center">
                        <div className="flex item-center space-x-1">
                            <IconButton>
                                <RemoveCircleIcon/>
                            </IconButton>
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}
