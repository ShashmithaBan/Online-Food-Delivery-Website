import React from 'react';
import { Avatar, Badge, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { green } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';

export const Navbar = () => {
  return (
    <Box className='px-5 sticky top-0 z-[100] py-4 bg-[#40c165] md:py-2 md:px-10 lg:px-20 flex justify-between'>
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className='logo font-semibold text-black-300 text-2xl list-none'>
          EkBar <span className='text-gray-50'>Foods</span>
        </li>
      </div>
      <div className="flex items-center space-x-4 lg:space-x-10">
        <div>
          <IconButton className=''>
            <SearchIcon sx={{ fontSize: "2rem", color: "#fff" }} />
          </IconButton>
        </div>
        <div className="">
          <Avatar sx={{ bgcolor: "white", color: green.A700 }}>C</Avatar>
        </div>
        <div>
          <IconButton className=''>
            <Badge badgeContent={3} color="secondary">
              <ShoppingCartIcon sx={{ fontSize: "2rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};

export default Navbar;