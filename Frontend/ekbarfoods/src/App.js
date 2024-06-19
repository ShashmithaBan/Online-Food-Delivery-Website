import React, { useEffect } from 'react';
import './App.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import darkTheme from './Theme/DarkTheme'


import { Provider, useDispatch, useSelector } from 'react-redux';
import { getUser } from './Components/State/Authentication/Action';
import { Routers } from './Routes/Routers';
import { CustomerRoutes } from './Routes/CustomerRoutes';
import { getRestaurantByUserId } from './Components/State/Restaurant/Action';
import { store } from './store';

function App() {
  


  return (
    
<ThemeProvider theme={darkTheme} >
      <CssBaseline/>
      <Provider store={store}>
      <Routers/> 
      </Provider>
    </ThemeProvider>
   
    
  );
}

export default App;
