import { Box, Modal } from '@mui/material';
import React from 'react'
import { style } from '../Cart/Cart';
import { useLocation, useNavigate } from 'react-router-dom';
import { RegisterForm } from './RegisterForm';
import { LoginForm } from './LoginForm';

export const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handeleOnClose = () =>{
        navigate("/")
    }
  return (
    <>
    <Modal onClose={handeleOnClose} open={
        location.pathname==="/account/register"
        ||location.pathname==="/account/login"
    }>
<Box sx={style}>
    {location.pathname==="/account/register"?<RegisterForm/>:<LoginForm/>}
</Box>
    </Modal>
    </>
  )
}
