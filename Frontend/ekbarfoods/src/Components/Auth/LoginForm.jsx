import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../State/Authentication/Action'


const initialValues ={
    email:"",
    password:""
}
export const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (values) =>{
      dispatch(loginUser({userData:values,navigate}))
    }
  return (
    <div className='flex flex-col space-y-3'>
        <h3 className='font-mono  text-center text-2xl font-extrabold'>Login</h3>

        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form >
            <Field
                 color='primary'
                as = {TextField}
                name = "email"
                label = "Email"
                fullWidth
                variant = "outlined"
                />
                <Field
                 color='primary'
                as = {TextField}
                name = "password"
                label = "Password"
                fullWidth
                variant = "outlined"
                sx ={{marginTop:"1vh"}}
                />
                <Button fullWidth variant='contained' type = "submit" sx ={{mt:2 ,padding:"1rem", fontFamily:"monospace"}}>Login</Button> 
            </Form>
            
        </Formik>
        <h4 className='text-center'>Don't have an account?<Button onClick={()=>navigate('/account/register')} sx={{fontWeight:"bold"}}>Register</Button></h4>
       
          
          
            
    </div>
  )
}
