import React from 'react'
import { EventCard } from '../../../Components/Profile/Cards/EventCard'
import { Button } from '@mui/material'
export const Events = () => {
  return (
    <div className='flex flex-col items-center pt-5'>
      <Button variant='contained'>CREATE NEW EVENTS</Button>
      <div className="flex flex-wrap justify-center">
      {[1,1,1].map((i)=><EventCard/>)}
      </div>
      
    </div>
  )
}
