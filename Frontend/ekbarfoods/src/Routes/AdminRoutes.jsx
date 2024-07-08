import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Admin } from '../AdminComponent/Admin Profile/Admin';
import { CreateRestaurantForm } from '../AdminComponent/CreateRestaurantForm';
import { getRestaurantByUserId } from '../State/restaurantSlice';

export const AdminRoutes = () => {
  const dispatch = useDispatch();
  const { userRestaurant, loading, error } = useSelector((state) => state.restaurant); 
  console.log('userRestaurant', userRestaurant);

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getRestaurantByUserId(jwt));
    }
  }, [dispatch, jwt]);

  if (loading) {
    return <p>Loading...</p>; 
  }

  

  return (
    <Routes>
      <Route path='/*' element={userRestaurant ? <Admin /> : <CreateRestaurantForm />} />
    </Routes>
  );
};
