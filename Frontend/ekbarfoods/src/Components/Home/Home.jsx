import React, { useEffect } from 'react'
import './Home.css'
import { MultiItemCarsoul } from './MultiItemCarsoul'
import { RestaurantCard } from '../Restaurant/RestaurantCard'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRestaurants } from '../State/Restaurant/Action'

const restaurants= [1,1,1,1,1,1,1]


export const Home = () => {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {restaurant} = useSelector(store => store)

  console.log("restaurant" , restaurant)
  useEffect(()=>{
    dispatch(getAllRestaurants(jwt))
  },[])
  
  
  return (
    <div className='pb-10'>
        <section className="banner -z-50 relative flex flex-row space-x-10 md:d-none ">
  <Grid container={12}>
    <Grid item  lg={6} md={5}>
    <div className="flex items-center justify-center h-screen ">
    <button className='em-btn sm:text-sm md:text-sm lg:text-xl font-bold lg:py-3 px-8 rounded'>
      Explore More
    </button>
    <button className= ' ab-btn text-lg font-bold py-5 px-10 rounded ml-4'>
      About Us
    </button>

</div>
    </Grid>
    <Grid item lg={7} md={7}>

    </Grid>
    </Grid>    
  




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
              restaurant.restaurants.map((item)=><RestaurantCard item = {item}/>)
            }
          </div>
        </section>
        

    </div>
  )
}
