import React, { useEffect } from 'react';
import './App.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import darkTheme from './Theme/DarkTheme'


import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './Components/State/Authentication/Action';
import { Routers } from './Routes/Routers';
import { CustomerRoutes } from './Routes/CustomerRoutes';

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
      <Routers/>
    </ThemeProvider>
  );
}

export default App;
