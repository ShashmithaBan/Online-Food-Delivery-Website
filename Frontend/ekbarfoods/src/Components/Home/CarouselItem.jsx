import React from 'react'

export const CarouselItem = ({image , title}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img className='w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] rounded-full object-cover object-center border-4 border-green-600' src={image} alt=''/>
        <span className='font-semibold text-xl'>{title}</span>
    </div>
  )
}
