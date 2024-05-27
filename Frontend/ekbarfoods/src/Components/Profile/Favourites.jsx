import React from 'react'
import {RestaurantCard} from '../Restaurant/RestaurantCard'

export const Favourites = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-5'>
      <h1 className='text-3xl font-bold text-center '>
       My Favourites
      </h1>
      <div className="flex flex-wrap justify-around">
      {[1,1,1,1].map((i)=><RestaurantCard/>)}
      </div>
      
    </div>
  )
}
