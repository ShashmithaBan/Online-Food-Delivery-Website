import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import darkTheme from './Theme/DarkTheme'
import { Home } from './Components/Home/Home';
import RestaurantDetail from './Components/Restaurant/RestaurantDetail';
import { Cart } from './Components/Cart/Cart';
import { Profile } from './Components/Profile/Profile';

function App() {
  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      {/*<Home/>*/}
      {/*<RestaurantDetail/>*/}
      {/* <Cart/> */}
      <Profile/>
    </ThemeProvider>
  );
}

export default App;
