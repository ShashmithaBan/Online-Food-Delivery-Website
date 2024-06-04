import { Card, Chip, IconButton } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const RestaurantCard = ({item}) => {
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
          sx={{ position: 'absolute', top: 8, left: 8, color:'white'}}
          color={item.open ?"success":"error"}
          label={item.open ? 'Open' : 'Closed'}
        />
      </div>
      <div className="pt-1 textpart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-xl">
            {item.name}
          </p>
          <p className="text-md text-gray-400">
            {item.description}
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
