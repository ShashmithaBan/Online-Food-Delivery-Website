import { Card, Chip, IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourite } from '../State/Authentication/Action';
import { isPresentInFavourites } from '../Config/logic';
import { getRestaurantById } from '../../State/restaurantSlice';

export const RestaurantCard = ({ item }) => {
  console.log("item", item);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store);

  

  const handleAddToFavourite = () => {
    dispatch(addToFavourite({ jwt, restaurantId: item.id }));
  };
  const handleNavigatetoRestaurant = () => {
    navigate(`/restaurant/${item.address.city}/${item.name}/${item.id}`);
  };

  return (
    <div className='m-5 w-[20rem]'>
      <div className={`relative ${true ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
        <img
          className='w-full h-[10rem] rounded-xl'
          src={item.images[1]}
          alt=""
        />
        <Chip
          size='small'
          sx={{ position: 'absolute', top: 8, left: 8, color: 'white' }}
          color={item.open ? "success" : "error"}
          label={item.open ? 'Open' : 'Closed'}
        />
      </div>
      <div className="pt-1 textpart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p onClick={handleNavigatetoRestaurant} className="font-semibold text-xl cursor-pointer">
            {item.title}
          </p>
          <p className="text-md text-gray-400">
            {item.description}
          </p>
        </div>
        <div>
          <IconButton onClick={handleAddToFavourite}>
            {isPresentInFavourites(auth.favourites, item) ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon sx={{ color: 'red' }} />}
          </IconButton>
        </div>
      </div>
    </div>
  );
};
