import React from 'react'
import {AddressCard} from '../Cart/AddressCard'

export const Address = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-5'>
      <h1 className='text-3xl font-bold text-center '>
       Addresses
      </h1>
      <div className="flex flex-wrap justify-around gap-6 p-10">
      {[1,1,1,1,1].map((item)=><AddressCard/>)}
      </div>
      
    </div>
  )
}
