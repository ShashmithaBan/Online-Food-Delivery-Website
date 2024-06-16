import React, { useEffect } from 'react'
import { AdminSidebar } from './AdminSidebar'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { Orders } from './Orders/Orders'
import { Menu } from './Menu/Menu'
import { Ingredients } from './Ingredients/Ingredients'
import { FoodCategory } from './Foodcategory/FoodCategory'
import { Events } from './Events/Events'
import { Details } from './Details/Details'
import { CreateMenuForm } from './Menu/CreateMenuForm'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantsCategory } from '../../Components/State/Restaurant/Action'
import { getRestaurantOrders } from '../../Components/State/RestaurantOrder/Action'




export const Admin = () => {
  const hanndleClose = () => {
    console.log("hi");
  };
  const jwt= localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { restaurant } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getRestaurantsCategory({
      jwt,
      restaurantId: restaurant.userRestaurant?.id,
    }));
    dispatch(getRestaurantOrders({
      jwt,
      estaurantId: restaurant.userRestaurant?.id,
    }))
    
  },[]);

  return (
    <div>
        <div className="lg:flex justify-between ">
          <div className="w-[20%]">
          <AdminSidebar onClick = {hanndleClose }/>
          </div>
            
            <div className="lg:flex w-[80%]">
            <Routes>
            <Route path='/' element={<Dashboard/>}/>
             <Route path='/orders' element={<Orders />}/>
            <Route path='/menu' element={<Menu />}/>
            <Route path='/ingredients' element={<Ingredients/>}/>
            <Route path='/foodcategory' element={<FoodCategory />}/>
            <Route path='/events' element={<Events />}/>
            <Route path='/details' element={<Details />}/>
            <Route path='/add-menu' element={<CreateMenuForm />}/>
            

            
          </Routes>
        </div>
        </div>
        
    </div>
  )
}
