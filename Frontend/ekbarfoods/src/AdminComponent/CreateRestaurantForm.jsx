import { CircularProgress, Grid, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';

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
    onSubmit: values => {
      console.log('Form data', values);
    }
  });

  const handleImageChange = (e) => {
    // Add your image change handling logic here
  };

  const handleRemoveImage = (index) => {
    // Add your image remove handling logic here
  };

  return (
    <div className='py-10 lg:flex item-center justify-center min-h-screen'>
      <h1 className="font-bold text-2xl text-center py-2">
        Add New Restaurant
      </h1>
      <form onSubmit={formik.handleSubmit} className='space-y-4'>
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
              <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-2 border rounded-md border-green-500'>
                <AddPhotoAlternateIcon className='text-green-500' />
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
        </Grid>
      </form>
    </div>
  );
};
