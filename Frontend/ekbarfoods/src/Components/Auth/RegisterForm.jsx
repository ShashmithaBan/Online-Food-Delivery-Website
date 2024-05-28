import { Password } from '@mui/icons-material'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const initialValues={
    fullName:"",
    email:"",
    Password:"",
    role:"ROLE_CUSTOMER"
}
export const RegisterForm = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col space-y-3'>
        <h3 className='font-mono  text-center text-2xl font-extrabold'>Register</h3>

        <Formik  initialValues={initialValues}>
            <Form >
            <Field
                 color='primary'
                as = {TextField}
                name = "fullName"
                label = "Full Name"
                fullWidth
                variant = "outlined"
                />
                <Field
                 color='primary'
                as = {TextField}
                name = "email"
                label = "Email"
                fullWidth
                variant = "outlined"
                sx ={{marginTop:"1vh"}}
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
                 <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Role</InputLabel>
  <Field as={Select}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
                <Button fullWidth variant='contained' type = "submit" sx ={{mt:2 ,padding:"1rem", fontFamily:"monospace"}}>Login</Button> 
            </Form>
            
        </Formik>
        <h4 className='text-center'>If you have an account?<Button onClick={()=>navigate('/account/login')} sx={{fontWeight:"bold"}}>Register</Button></h4>
       
          
          
            
    </div>
  )
}
