import React, { useEffect } from 'react';
import { Avatar, Badge, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { green } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person4Icon from '@mui/icons-material/Person4';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navbar.css';
import { getUser } from '../State/Authentication/Action';

const Navbar = () => {
  const { auth } = useSelector(store => store) || { auth: { user: null } }; 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  console.log('hi', auth);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [dispatch, jwt]);

  const handleAvatarClick = () => {
    console.log("Avatar clicked");
    if (auth.user?.role === "ROLE_CUSTOMER") {
      console.log("Navigating to /my-profile");
      navigate("/my-profile");
    } else if (auth.user?.role === "ROLE_RESTAURANT_OWNER") { 
      console.log("Navigating to /admin/restaurant");
      navigate("/admin/restaurant");
    }
  };

  return (
    <Box className='px-5 sticky top-0 z-[100] py-4 bg-[#40c165] md:py-2 md:px-10 lg:px-20 flex justify-between'>
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li onClick={() => navigate("/")} className='logo font-semibold text-black-300 text-2xl list-none font-mono'>
          EkBar <span className='text-gray-50 font-extrabold'>Foods</span>
        </li>
      </div>
      <div className="flex items-center space-x-4 lg:space-x-10">
        <div>
          <IconButton>
            <SearchIcon sx={{ fontSize: "2rem", color: "#fff" }} />
          </IconButton>
        </div>
        <div>
          {auth.user ? (
            <Avatar 
              onClick={handleAvatarClick} 
              sx={{ bgcolor: "white", color: green.A700, cursor: 'pointer' }} // Added cursor pointer for clarity
            >
              {auth.user?.fullName[0]?.toUpperCase()}
            </Avatar>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <Person4Icon sx={{ fontSize: "2rem" }} />
            </IconButton>
          )}
        </div>
        <div>
          <IconButton>
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
