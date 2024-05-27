import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center shadow-lg mt-10 p-5'>
       <div className="flex items-center  justify-between  space-x-10  ">
       <img
          className='w-[6rem] h-[6rem] object-cover rounded-full'
          src="https://cdn.pixabay.com/photo/2024/04/26/05/52/cheeseburger-8721189_1280.png"
          alt=""
        />
        <div className='text-gray-950 text-center font-mono'>
            <p>Biriyani</p>
            <p>LKR 1000</p>
        </div>
        
       </div>
       <div>
            <Button variant='outlined' 
            disabled
            className='cursor-not-allowed'
             sx={{
                
                '&.Mui-disabled': {
                  border:'1px solid #656565',
                  color: '#656565',
                },
              }}
              >
                Completed
              </Button>
        </div>
    </Card>
  )
}
