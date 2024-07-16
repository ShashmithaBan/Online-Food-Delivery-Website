import { Button, CircularProgress, Grid, IconButton, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { uploadImageToCloudinary } from './util/UploadToCloudinary';
import { useDispatch } from 'react-redux';
import { createRestaurant } from '../State/restaurantSlice';

const initialValues = {
  name: "",
  description: "",
  cuisineType: "",
  streetAddress: "",
  city: "",
  stateProvince: "",
  postalCode: "",
  country: "",
  openingHours: "Mon-Sun : 9.00 AM - 9.00 PM",
  email: "",
  mobile: "",
  twitter: "",
  instagram: "",
  images: []
};

export const CreateRestaurantForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data = {
        name: values.name,
        description: values.description,
        cuisineType: values.cuisineType,
        address: {
          streetAddress: values.streetAddress,
          city: values.city,
          stateProvince: values.stateProvince,
          postalCode: values.postalCode,
          country: values.country,
        },
        contactInformation: {
          email: values.email,
          mobile: values.mobile,
          twitter: values.twitter,
          instagram: values.instagram,
        },
        openingHours: values.openingHours,
        images: values.images,
      };

      console.log('data ---', data);
      dispatch(createRestaurant({ req: data, jwt }));
    },
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadImage(false);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className='py-10 flex flex-col items-center min-h-screen bg-black space-y-10'>
      <h1 className="font-bold text-3xl text-center text-white">Add New Restaurant</h1>
      <form onSubmit={formik.handleSubmit} className='space-y-4 px-10 lg:w-[1000px]'>
        <Grid container spacing={2}>
          <Grid item className='flex flex-wrap gap-5' xs={12}>
            <input
              type='file'
              accept='image/*'
              id='fileInput'
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <label className='relative' htmlFor='fileInput'>
              <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-2 border rounded-md hover:border-green-500'>
                <AddPhotoAlternateIcon className='text-white hover:text-green-500' />
              </span>
              {uploadImage && (
                <div className='absolute left-0 right-0 top-7 bottom-0 w-24 h-24 flex justify-center'>
                  <CircularProgress />
                </div>
              )}
            </label>
            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((item, index) => (
                <div key={index} className="relative">
                  <img className='w-24 h-24 object-cover' src={item} alt='' />
                  <IconButton
                    sx={{ position: "absolute", top: 0, right: 0, outline: "none" }}
                    onClick={() => handleRemoveImage(index)}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              onChange={formik.handleChange}
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
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </Grid>
          <Grid item lg={6} sm={12}>
            <TextField
              fullWidth
              id="cuisineType"
              name="cuisineType"
              label="Cuisine Type"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.cuisineType}
            />
          </Grid>
          <Grid item lg={6} sm={12}>
            <TextField
              fullWidth
              id="openingHours"
              name="openingHours"
              label="Opening Hours"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.openingHours}
            />
          </Grid>
          <Grid container lg={8} md={12} spacing={2} className='mt-2 pt-5 px-4'>
            <Grid item lg={4} md={12}>
              <TextField
                fullWidth
                id="streetAddress"
                name="streetAddress"
                label="Street Address"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.streetAddress}
              />
            </Grid>
            <Grid item lg={4} md={12}>
              <TextField
                fullWidth
                id="city"
                name="city"
                label="City"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.city}
              />
            </Grid>
            <Grid item lg={4} md={12}>
              <TextField
                fullWidth
                id="stateProvince"
                name="stateProvince"
                label="State/Province"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.stateProvince}
              />
            </Grid>
            <Grid item lg={6} md={12}>
              <TextField
                fullWidth
                id="postalCode"
                name="postalCode"
                label="Postal Code"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.postalCode}
              />
            </Grid>
            <Grid item lg={6} md={12}>
              <TextField
                fullWidth
                id="country"
                name="country"
                label="Country"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.country}
              />
            </Grid>
          </Grid>
          <Grid container lg={8} md={12} spacing={2} className='mt-2 pt-5 px-4'>
            <Grid item lg={6} md={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Grid>
            <Grid item lg={6} md={12}>
              <TextField
                fullWidth
                id="mobile"
                name="mobile"
                label="Mobile"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.mobile}
              />
            </Grid>
            <Grid item lg={6} md={12}>
              <TextField
                fullWidth
                id="twitter"
                name="twitter"
                label="Twitter"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.twitter}
              />
            </Grid>
            <Grid item lg={6} md={12}>
              <TextField
                fullWidth
                id="instagram"
                name="instagram"
                label="Instagram"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.instagram}
              />
            </Grid>
          </Grid>
        </Grid>
        <Button type='submit' className='mt-4' variant='contained' color='primary'>
          Create Restaurant
        </Button>
      </form>
    </div>
  );
};
