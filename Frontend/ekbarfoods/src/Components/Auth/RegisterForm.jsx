import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../State/Authentication/Action';
import { styled } from '@mui/material/styles'; 

const BlackMenuItem = styled(MenuItem)(({ theme }) => ({
    color: 'black',
  }));
const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: "ROLE_CUSTOMER"
};

export const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleSubmit = (values) => {
        console.log("form values", values);
        dispatch(registerUser({userData:values,navigate}))
    }

    return (
        <div className='flex flex-col space-y-3'>
            <h3 className='font-mono text-center text-2xl font-extrabold'>Register</h3>

            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                {({ values, handleChange }) => (
                    <Form>
                        <Field
                            margin="normal"
                            color='primary'
                            as={TextField}
                            name="fullName"
                            label="Full Name"
                            fullWidth
                            variant="outlined"
                        />
                        <Field
                            color='primary'
                            as={TextField}
                            name="email"
                            label="Email"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        />
                        <Field
                            color='primary'
                            as={TextField}
                            name="password"
                            label="Password"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            type="password"
                        />
                        <FormControl fullWidth variant="outlined" margin="normal">
                            <InputLabel id="role-simple-select-label">Role</InputLabel>
                            <Select
                                labelId="role-simple-select-label"
                                id="role-simple-select"
                                label="Role"
                                name="role"
                                value={values.role}
                                onChange={handleChange}
                            >
                                <BlackMenuItem sx={{color:"black"}} value={"ROLE_CUSTOMER"}>Customer</BlackMenuItem>
                                <BlackMenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</BlackMenuItem>
                            </Select>
                        </FormControl>

                        <Button fullWidth variant='contained' type="submit" sx={{ mt: 2, padding: "1rem", fontFamily: "monospace" }}>Register</Button>
                    </Form>
                )}
            </Formik>
            <h4 className='text-center'>If you have an account?<Button onClick={() => navigate('/account/login')} sx={{ fontWeight: "bold" }}>Login</Button></h4>
        </div>
    );
}
