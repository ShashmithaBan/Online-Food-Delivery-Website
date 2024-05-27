import { Card, Chip, IconButton } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const RestaurantCard = () => {
  return (
    <div className='m-5 w-[20rem]'>
      <div className={`relative ${true ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
        <img
          className='w-full h-[10rem] rounded-xl'
          src="https://cdn.pixabay.com/photo/2015/06/30/18/36/st-826688_1280.jpg"
          alt=""
        />
        <Chip
          size='small'
          sx={{ position: 'absolute', top: 8, left: 8, color:'white' , backgroundColor:"#33c500" }}
          color={true ? 'success' : 'error'}
          label={true ? 'Open' : 'Closed'}
        />
      </div>
      <div className="pt-1 textpart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-xl">
            Indian Fast Food
          </p>
          <p className="text-md text-gray-400">
            Craving it all? Drive into our Goal
          </p>
        </div>
        <div>
          <IconButton>
          
            {true ? <FavoriteIcon sx={{ color: 'red' }}/> : <FavoriteBorderIcon sx={{ color: 'red' }}/>}
          </IconButton>
        </div>
      </div>
    </div>
  );
};
