import { Grid } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

export const DetailTables = () => {
  return (
    <div className='flex justify-center'>
        <Grid container spacing={2}>
            <Grid item xs = {12}>
            <div className="flex flex-col justify-center  shadow-md  p-5">
                <h1 className='text-2xl mb-6'>Restaurant</h1>
                <div className="flex flex-col gap-5">
                <div className="flex flex-row gap">
                <h1 className="w-44">Owner</h1>
                <span className='w-7'>-</span>
                <p>Raam</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">Restaurant Name</h1>
                <span className='w-7'>-</span>
                <p>Raam</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">Cuisine Type</h1>
                <span className='w-7'>-</span>
                <p>india</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">Opening Hours</h1>
                <span className='w-7'>-</span>
                <p>Mon-Sun: 9.00 AM - 9.00 PM</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">Status</h1>
                <span className='w-7'>-</span>
                {
                    true?<span className='bg-green-500 text-white font-bold p-1 px-2 rounded-2xl'>
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
                <p>Sri Lanka</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">City</h1>
                <span className='w-7'>-</span>
                <p>Colombo</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">Postal Code</h1>
                <span className='w-7'>-</span>
                <p>530068</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">Street Address</h1>
                <span className='w-7'>-</span>
                <p>Crystal Street</p>
                </div>
                </div>

            </div>
            </Grid>
            <Grid item xs = {12} lg = {7}>
            <div className="flex flex-col justify-center  shadow-md  p-5">
                <h1 className='text-2xl mb-6'>Contact</h1>
                <div className="flex flex-col gap-5">
                <div className="flex flex-row gap">
                <h1 className="w-44">Email</h1>
                <span className='w-7'>-</span>
                <p>uschxiusahiuhioj@gmail.com</p>
                </div>
                <div className="flex flex-row">
                <h1 className="w-44">Mobile</h1>
                <span className='w-7'>-</span>
                <p>+94773701279</p>
                </div>
                <div className="flex flex-row pb-5 items-center">
                <h1 className="w-44">Social</h1>
                <span className='w-7'>-</span>
                <div className="flex flex-row gap-5 items-center">
                    <a href=''><FacebookIcon sx={{fontSize:"3rem"}}/></a>
                    <a href=''><InstagramIcon sx={{fontSize:"2.8rem"}}/></a>
                    <a href=''><XIcon sx={{fontSize:"2.6rem"}}/></a>
                    
                    
                </div>
                </div>
                </div>

            </div>
            </Grid>
        </Grid>
    </div>
  )
}
