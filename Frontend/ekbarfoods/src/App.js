import React, { useEffect } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import darkTheme from './Theme/DarkTheme'
import { Home } from './Components/Home/Home';
import RestaurantDetail from './Components/Restaurant/RestaurantDetail';
import { Cart } from './Components/Cart/Cart';
import { Profile } from './Components/Profile/Profile';
import { CustomerRoutes } from './Routes/CustomerRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './Components/State/Authentication/Action';

function App() {
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const {auth}= useSelector(store=>store)
  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt]
  );
  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <CustomerRoutes/>
    </ThemeProvider>
  );
}

export default App;
