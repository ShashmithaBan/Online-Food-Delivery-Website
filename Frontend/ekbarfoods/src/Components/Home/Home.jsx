import React from 'react'
import './Home.css'
import { MultiItemCarsoul } from './MultiItemCarsoul'
import { RestaurantCard } from '../Restaurant/RestaurantCard'

const restaurant= [1,1,1,1,1,1,1]
export const Home = () => {
  
  return (
    <div className='pb-10'>
        <section className="banner -z-50 relative flex flex-row space-x-10 md:d-none ">
        
  <div className="absolute top-1/2 translate-y-4 lg:left-48 sm:justify-center  ">
    <button className='em-btn sm:text-sm md:text-sm lg:text-xl font-bold lg:py-3 px-8 rounded'>
      Explore More
    </button>
    <button className= ' ab-btn text-lg font-bold py-5 px-10 rounded ml-4'>
      About Us
    </button>

</div>





        </section>
        <section className='p-10 lg:py-10 lg:px-20 '>
          <div className="textoutline text-2xl font-bold mb-5">
          Top Meals
          </div>
          
        <MultiItemCarsoul/>
        </section>
        <section className='p-10 lg:py-10 lg:px-20 '>
          <h1 className='text-2xl font-semibold pb-5'>From our Handpicked Favourites</h1>
          <div className="flex flex-wrap item-center justify-around gap-5">
            {
              restaurant.map((item)=><RestaurantCard/>)
            }
          </div>
        </section>
    </div>
  )
}
