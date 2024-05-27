import React from 'react'
import { EventCard } from './Cards/EventCard'

export const Events = () => {
  return (
     <div className='flex flex-col items-center justify-center pt-5'>
      <h1 className='text-3xl font-bold text-center '>
       Events
      </h1>
      <div className="flex flex-wrap justify-around">
      {[1,1,1].map((i)=><EventCard/>)}
      </div>
      
    </div>
  )
}
