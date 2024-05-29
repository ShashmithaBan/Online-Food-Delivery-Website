import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const initialValues ={
    email:"",
    password:""
}
export const LoginForm = () => {
    const navigate = useNavigate()
    const handleSubmit = (values) =>{
 console.log("form values",values)
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