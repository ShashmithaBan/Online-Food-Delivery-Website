import { Button } from '@mui/material'
import React from 'react'
import { DetailTables } from './DetailTables'

export const Details = () => {
  return (
    
      <div className="flex flex-col  pt-3  gap-10 px-10 p-10">
        <div className="flex items-center justify-around  gap-6">
          <h1 className="lg:text-7xl text-4xl text-center">Ricorn</h1>
          <Button  color={true ?"primary":"error"} className='py-[1rem] px-[1rem]'
          size='large'variant='contained'>{true ? 'Open' : 'Close'} </Button>
        </div>
        <div className=" w-full">
          <DetailTables/>
        </div>
      </div>
   
  )
}
