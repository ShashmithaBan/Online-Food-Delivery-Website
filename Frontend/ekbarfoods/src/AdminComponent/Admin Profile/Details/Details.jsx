import { Button } from '@mui/material'
import React from 'react'
import { DetailTables } from './DetailTables'
import { useDispatch, useSelector } from 'react-redux'
import { updateRestaurantStatus } from '../../../Components/State/Restaurant/Action'
import {  useGetRestaurantByUserIdQuery } from '../../../Features/apiSlice'

export const Details = () => {
 const {data} = useGetRestaurantByUserIdQuery();
 console.log(data);
  return (
    
      <div className="flex flex-col  pt-3  gap-10 px-10 p-10">
        {/* <div className="flex items-center justify-around  gap-6">
          <h1 className="lg:text-7xl text-4xl text-center">{restaurant.userRestaurant?.name}</h1>
          <Button onClick={handleRestaurantStatus }  color={!restaurant.userRestaurant.open ?"primary":"error"} className='py-[1rem] px-[1rem]'
          size='large'variant='contained'>{! restaurant.userRestaurant.open ? 'Open' : 'Close'} </Button>
        </div>
        <div className=" w-full">
          <DetailTables/>
        </div> */}
      </div>
   
  )
}
