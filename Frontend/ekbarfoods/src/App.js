import React, { useEffect } from 'react';
import './App.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import darkTheme from './Theme/DarkTheme';

import { Provider, useDispatch } from 'react-redux';
import { getUser } from './Components/State/Authentication/Action';
import { Routers } from './Routes/Routers';
import { store } from './store';
import { getRestaurantByUserId } from './State/restaurantSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
     
      dispatch(getUser(jwt));
    }
  }, [dispatch]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Routers/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;