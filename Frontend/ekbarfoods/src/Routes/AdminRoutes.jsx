import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Admin } from '../AdminComponent/Admin Profile/Admin';
import { CreateRestaurantForm } from '../AdminComponent/CreateRestaurantForm';

export const AdminRoutes = () => {
  const { userRestaurant } = useSelector((state) => state.restaurant);

  return (
    <Routes>
      <Route path='/*' element={userRestaurant ? <Admin /> : <CreateRestaurantForm />} />
    </Routes>
  );
};
