import { Avatar, Badge, IconButton } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { green } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='px-5 z-50 py-4 bg-[#40c165] lg:px-20 flex justify-between'>
      <div className="flex items-center space-x-4">
        <div className=" cursor-pointer flex items-center space-x-4">
          <li className='logo font-semibold text-black-300 text-2xl list-none'>
            EkBar <span className='text-gray-50'>Foods</span>
          </li>
        </div>
      </div>
      <div className="flex items-center space-x-4 lg:space-x-10">
        <div>
          <IconButton className=''>
            <SearchIcon sx={{ fontSize: "2rem", color: "#fff" }} />
          </IconButton>
        </div>
        <div className="">
            <Avatar sx={{bgcolor:"white", color:green.A700}}>C</Avatar>
        </div>
        <div>
        <IconButton className=''>
            <Badge  badgeContent={3} color="secondary">
            <ShoppingCartIcon sx={{ fontSize: "2rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};
