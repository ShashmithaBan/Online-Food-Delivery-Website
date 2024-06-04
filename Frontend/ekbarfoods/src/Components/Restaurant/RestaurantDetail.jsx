import {Radio, FormControlLabel,FormControl, Grid, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Label } from '@mui/icons-material';
import { MenuCard } from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantsCategory } from '../State/Restaurant/Action';

const categories = [
    "pizza",
    "biriyani",
    "burger",
    "chicken",
    "rice"
];
const foodTypes =[
    {Label:"All" ,value :"All"},
    {Label:"Vegetarian only" ,value :"vegetarian"},
    {Label:"Non-Vegetarian" ,value :"non_vegetarian"},
    {Label:"Seasonal" ,value :"seasonal"},
];
const menu = [1,1,1,1,1,1]
export const RestaurantDetail = () => {
    const[foodType , setFoodType] = useState("all")
    const navigate = useNavigate()
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth,restaurant} = useSelector(store => store)

  const {id,city} = useParams();

  console.log("restaurant" , restaurant)
  useEffect(()=>{
    dispatch(getRestaurantById({jwt , restaurantId:id}))
    dispatch(getRestaurantsCategory({jwt , restaurantId:id}))
  },[])

    const handleFilter = (e) =>{
        console.log(e.target.value, e.target)
    }

  return (
    <div className='px-5 lg:px-20 mt-5' >
        
        <section>
            <h3 className='text-s font-bold mb-3 text-yellow-500 font-mono underline'>Home/India/India fast food/3</h3>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img className="w-full h-[40vh] object-cover"
                    src={restaurant.restaurant?.images[0]} alt="" />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <img className="w-full h-[40vh] object-cover"
                    src={restaurant.restaurant?.images[1]} alt="" />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <img className="w-full h-[40vh] object-cover"
                    src={restaurant.restaurant?.images[2]} alt="" />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <img className="w-full h-[40vh] object-cover"
                    src={restaurant.restaurant?.images[3]} alt="" />
                </Grid>
                
            </Grid>
            <div className="pb-3 mt-3">
                <h1 className="text-4xl font-extrabold">
                    {restaurant.restaurant?.name}
                </h1>
                <p className="text-md text-gray-500">
                {restaurant.restaurant?.description}
                </p>
                <div className="space-y-3 mt-3 font-semibold">
                    <p className="flex items-center gap-2">
                <FmdGoodIcon/>
                <span>
                    Crystal Street , Borella
                </span>
                    </p>
                    <p className="flex items-center gap-2">
                <CalendarTodayIcon/>
                <span className='text-yellow-500'>
                    {restaurant.restaurant?.openingHours}
                </span>
                    </p>
                </div>
            </div>
        </section>
        <hr className="border-black w-full" />
        <section className='pt-[2rem] lg:flex relative'>
            <div className="filter space-y-10 lg:w-[20%]">
                <div className="box space-y-5 lg:sticky top-28 p-5 shadow-md">
                <Typography variant="h5" sx={{paddingBottom:"1rem" ,fontWeight:600}}>
              Food Types
            </Typography>
<FormControl className = "py-8 space-y-5" component={"fieldset"}>
    <RadioGroup onClick={handleFilter} name='food_type' value={foodTypes}>
            {foodTypes.map((i)=> <FormControlLabel key={i.value} value={i.value}control={<Radio />} label={i.Label} sx={{ color: 'black' }}/>)}
    </RadioGroup>
</FormControl>
<hr className="border-black w-full"/>
<Typography variant="h5" sx={{paddingBottom:"1rem" ,fontWeight:600}}>
              Food Categories
            </Typography>
<FormControl className = "py-8 space-y-5" component={"fieldset"}>
    <RadioGroup onClick={handleFilter} name='categories' value={categories}>
            {restaurant.categories.map((i)=> <FormControlLabel key={i} value={i.name}control={<Radio />} label={i.name} sx={{ color: 'black' }}/>)}
    </RadioGroup>
</FormControl>
            </div>
            </div>
            
            <div className="menu lg:w-[80%] lg:pl-10 p-5 text-black space-y-5">
            <Typography variant="h5" sx={{paddingBottom:"1rem" , fontWeight:600 }}>
              Menu
            </Typography>
              {menu.map((i) => <MenuCard />)}   
            </div>
        </section>
        </div>
  )
}
export default RestaurantDetail
