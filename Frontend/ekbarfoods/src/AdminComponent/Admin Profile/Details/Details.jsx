import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { DetailTables } from './DetailTables';
import { useDispatch, useSelector } from 'react-redux';
import { updateRestaurantStatus } from '../../../Components/State/Restaurant/Action';
import { useGetRestaurantByUserIdQuery } from '../../../Features/apiSlice';
import { getRestaurantByUserId } from '../../../State/restaurantSlice';

export const Details = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { userRestaurant, loading, error } = useSelector((state) => state.restaurant); 
  


  
  const restaurant = useSelector((state) => state.restaurant.userRestaurant);

  
  const handleRestaurantStatus = () => {
    const updatedStatus = !restaurant.open;
    dispatch(updateRestaurantStatus({ jwt, restaurantId: restaurant.id, open: updatedStatus }))
    .then(() => {
      window.location.reload();})
  };

  return (
    <div className="flex flex-col pt-3 gap-10 px-10 p-10 m-auto  ">
      
      {restaurant && (
        <>
          <div className="flex items-center gap-6">
            <h1 className="lg:text-7xl text-4xl text-center">{userRestaurant.name}</h1>
            <Button 
              onClick={handleRestaurantStatus} 
              color={userRestaurant.open ? "primary" : "error"} 
              className='py-[1rem] px-[1rem]'
              size='large'
              variant='contained'
            >
              {userRestaurant.open ? 'Open' : 'Close'}
            </Button>
          </div>
          <div className="w-full">
            <DetailTables />
          </div>
        </>
      )}
    </div>
  );
};
