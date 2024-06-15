import { Grid } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { useSelector } from 'react-redux';

export const DetailTables = () => {
    const {restaurant} = useSelector((store) =>store)
  return (
    <div className='flex justify-center '>
        <Grid container spacing={2}>
            <Grid item xs = {12}>
            <div className="flex flex-col justify-center  shadow-md  p-5">
                <h1 className='text-2xl mb-6'>Restaurant</h1>
                <div className="flex flex-col gap-5">
                <div className="flex flex-row gap">
                <h1 className="w-44">Owner</h1>
                <span className='w-7'>-</span>
                <p>{restaurant.userRestaurant?.owner.fullName}</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">Restaurant Name</h1>
                <span className='w-7'>-</span>
                <p>{restaurant.userRestaurant?.name}</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">Cuisine Type</h1>
                <span className='w-7'>-</span>
                <p>{restaurant.userRestaurant?.cuisineType}</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">Opening Hours</h1>
                <span className='w-7'>-</span>
                <p>{restaurant.userRestaurant?.openingHours}</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">Status</h1>
                <span className='w-7'>-</span>
                {
                    restaurant.userRestaurant?.open?<span className='bg-green-500 text-white font-bold p-1 px-2 rounded-2xl'>
                        Open
                    </span>:<span className='bg-red-500 text-white font-bold p-1 px-2 rounded-2xl'>
                        Closed
                    </span>
                }
                </div>
                </div>

            </div>
            </Grid>
            <Grid item xs = {12} lg = {5}>

                <div className="flex flex-col justify-center  shadow-md  p-5">
                <h1 className='text-2xl mb-6'>Address</h1>
                <div className="flex flex-col gap-5">
                <div className="flex flex-row gap">
                <h1 className="w-44">Country</h1>
                <span className='w-7'>-</span>
                <p>{restaurant.userRestaurant?.address.country}</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">City</h1>
                <span className='w-7'>-</span>
                <p>{restaurant.userRestaurant?.address.city}</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">Postal Code</h1>
                <span className='w-7'>-</span>
                <p>{restaurant.userRestaurant?.address.postalCode}</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">Street Address</h1>
                <span className='w-7'>-</span>
                <p>{restaurant.userRestaurant?.address.streetAddress}</p>
                </div>
                </div>

            </div>
            </Grid>
            
        </Grid>
    </div>
  )
}
