import { Button, CircularProgress, Grid, IconButton, TextField, makeStyles } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { TextFields } from '@mui/icons-material';




const initialValues = {
  name: "",
  description: "",
  cuisineType: "",
  streetAddress: "",
  city: "",
  stateProvince: "",
  postalCode: "",
  country: "",
  email: "",
  mobile: "",
  twitter: "",
  instagram: "",
  openingHours: "Mon-Sun : 9.00 AM - 9.00 PM",
  images: []
};

export const CreateRestaurantForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
 
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data={
        name:values.name,
        description:values.description,
        cuisineType:values.cuisineType,
        address:
            {streetAddress:values.streetAddress,
            city:values.city,
            stateProvince:values.stateProvince,
            postalCode:values.postalCode,
            country:values.country,},

        contactInformations:
            {email:values.email,
            mobile:values.mobile,
            twitter:values.twitter,
            instagram:values.instagram,},
        
        openingHours:values.openingHours,
        images : values.images
      }
      console.log('data ---',data)
    }
  });

  const handleImageChange = (e) => {
    // Add your image change handling logic here
  };

  const handleRemoveImage = (index) => {
    // Add your image remove handling logic here
  };

  return (
    <div className='py-10 flex lg:flex-col items-center  min-h-screen bg-black space-y-10 '>
      <h1 className="font-bold text-3xl text-center  text-white">
        Add New Restaurant
      </h1>
      <form onSubmit={formik.handleSubmit} className='space-y-4 px-10 lg:w-[1000px] '>
      <Grid container spacing={2}>
  <Grid item className='flex flex-wrap gap-5 ' xs={12}>
    <input
      type='file'
      accept='image/*'
      id='fileInput'
      style={{ display: 'none' }}
      onChange={handleImageChange}
    />
    <label className='relative' htmlFor='fileInput'>
      <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-2 border rounded-md  hover:border-green-500'>
        <AddPhotoAlternateIcon className='text-white hover:text-green-500' />
      </span>
      {uploadImage && (
        <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center'>
          <CircularProgress />
        </div>
      )}
    </label>
    <div className="flex flex-wrap gap-2">
      {[1, 1, 1].map((item, index) => (
        <div key={index} className="relative">
          <img
            className='w-24 h-24 object-cover'
            src='https://cdn.pixabay.com/photo/2024/04/26/05/52/cheeseburger-8721189_1280.png'
            alt=''
          />
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              outline: "none"
            }}
            onClick={() => handleRemoveImage(index)}>
            <CloseIcon />
          </IconButton>
        </div>
      ))}
    </div>
  </Grid>
  <Grid item xs={12}
  
  >
    <TextField fullWidth
    id="name"
    name = "name"
    label = "name"
    variant = "outlined"
    onChange= {formik.handleChange}
    value={formik.values.name}
    sx={{
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'black', // default outline color
        },
        
      }
    }}
    />
  </Grid>
  <Grid item xs={12}>
    <TextField fullWidth
    id="desctiption"
    name = "description"
    label = "description"
    variant = "outlined"
    onChange= {formik.handleChange}
    value={formik.values.description}
    />
  </Grid>
  <Grid item xs={6}>
    <TextField fullWidth
    id="cuisineType"
    name = "cuisineType"
    label = "cuisineType"
    variant = "outlined"
    onChange= {formik.handleChange}
    value={formik.values.cuisineType}
    />
  </Grid>
  <Grid item xs={6}>
    <TextField fullWidth
    id="openingHours"
    name = "openingHours"
    label = "openingHours"
    variant = "outlined"
    onChange= {formik.handleChange}
    value={formik.values.openingHours}
    />
  </Grid>
  <Grid container xs={8} spacing={2} className='mt-2 pt-5 px-4'>
  <Grid item xs={4}>
    <TextField fullWidth
    id="streetAddress"
    name = "streetAddress"
    label = "streetAddress"
    variant = "outlined"
    onChange= {formik.handleChange}
    value={formik.values.streetAddress}
    />
  </Grid>
  <Grid item xs={4}>
    <TextField fullWidth
    id="city"
    name = "city"
    label = "city"
    variant = "outlined"
    onChange= {formik.handleChange}
    value={formik.values.city}
    />
  </Grid>
  <Grid item xs={4}>
    <TextField fullWidth
    id="stateProvince"
    name = "stateProvince"
    label = "stateProvince"
    variant = "outlined"
    onChange= {formik.handleChange}
    value={formik.values.stateProvince}
    />
  </Grid>
  <Grid item xs={6}>
    <TextField fullWidth
    id="postalCode"
    name = "postalCode"
    label = "postalCode"
    variant = "outlined"
    onChange= {formik.handleChange}
    value={formik.values.postalCode}
    />
  </Grid>
  <Grid item xs={6}>
    <TextField fullWidth
    id="country"
    name = "country"
    label = "country"
    variant = "outlined"
    onChange= {formik.handleChange}
    value={formik.values.country}
    />
  </Grid>
 
  </Grid>
  <Grid item xs={6}>
    <TextField fullWidth
    id="email"
    name = "email"
    label = "email"
    variant = "outlined"
    onChange= {formik.handleChange}
    value={formik.values.email}
    >

    </TextField>
  </Grid>
  <Grid item xs={6}>
    <TextField fullWidth
    id="mobile"
    name = "mobile"
    label = "mobile"
    variant = "outlined"
    onChange= {formik.handleChange}
    value={formik.values.country}
    ></TextField>
  </Grid>
  <Grid item xs={3}>
    <TextField fullWidth
    id="twitter"
    name = "twitter"
    label = "twitter"
    variant = "outlined"
    onChange= {formik.handleChange}
    value={formik.values.twitter}
    ></TextField>
  </Grid>
  <Grid item xs={3}>
    <TextField fullWidth
    id="instagram"
    name = "instagram"
    label = "instagram"
    variant = "outlined"
    onChange= {formik.handleChange}
    value={formik.values.instagram}
    ></TextField>
  </Grid>
</Grid>

<Button type='submit' className='mt-4' variant='contained' color='primary' >
  Create Restaurant
</Button>

 

      </form>
    </div>
  );
};
