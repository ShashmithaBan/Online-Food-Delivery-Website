import React from 'react'
import {RestaurantCard} from '../Restaurant/RestaurantCard'
import { useSelector } from 'react-redux'

export const Favourites = () => {
  const {auth} = useSelector(store => store)
  console.log('auth',auth)
  
  return (
    <div className='flex flex-col items-center justify-center pt-5'>
      <h1 className='text-3xl font-bold text-center '>
       My Favourites
      </h1>
      <div className="flex flex-wrap justify-around">
      {auth.favourites.map((item)=><RestaurantCard item={item}/>)}
      </div>
      
    </div>
  )
}
