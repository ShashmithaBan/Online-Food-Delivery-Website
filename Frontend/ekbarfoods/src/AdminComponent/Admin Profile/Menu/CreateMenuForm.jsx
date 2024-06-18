import React, { useState } from 'react';
import { Box, Button, Chip, CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { uploadImageToCloudinary } from '../../util/UploadToCloudinary';
import { useDispatch, useSelector } from 'react-redux';
import { createMenuItem } from '../../../Components/State/Menu/Action';

const initialValues = {
  name: "",
  description: "",
  price: "",
  category: "",
  restaurantId: "",
  vegetarian: true,
  seasonal: false,
  ingredients: [],
  images: [],
};

export const CreateMenuForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const { restaurant, ingredient } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      values.restaurantId = restaurant.userRestaurant.id;
      console.log('data ---', values);
      dispatch(createMenuItem({ reqData: values, jwt }));
    }
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

  console.log('Ingredients:', ingredient.ingredients);

  return (
    <div className='py-10 flex flex-col w-full items-center min-h-screen bg-neutral-500 space-y-10'>
      <h1 className="font-bold text-3xl text-center text-white">Add Menu</h1>
      <form onSubmit={formik.handleSubmit} className='space-y-4 px-10 lg:w-[1000px]'>
        <Grid container spacing={2}>
          <Grid item xs={12} className='flex flex-wrap gap-5'>
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
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.name}
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
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="price"
              name="price"
              label="Price"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
          </Grid>
          
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="ingredients-label">Ingredients</InputLabel>
              <Select
                labelId="ingredients-label"
                id="ingredients"
                multiple
                value={formik.values.ingredients}
                onChange={(event) => formik.setFieldValue("ingredients", event.target.value)}
                input={<OutlinedInput id="select-multiple-chip" label="Ingredients" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selected.map((id) => {
                      const ingredientItem = ingredient.ingredients.find(item => item.id === id);
                      return ingredientItem ? <Chip key={id} label={ingredientItem.name} /> : null;
                    })}
                  </Box>
                )}
              >
                {ingredient.ingredients.map((item) => (
                  <MenuItem
                    key={item.id}
                    value={item.id}
                    sx={{ color: "black" }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="seasonal-label">Seasonal</InputLabel>
              <Select
                labelId="seasonal-label"
                id="seasonal"
                value={formik.values.seasonal}
                label="Seasonal"
                onChange={formik.handleChange}
                name='seasonal'
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="vegetarian-label">Vegetarian</InputLabel>
              <Select
                labelId="vegetarian-label"
                id="vegetarian"
                value={formik.values.vegetarian}
                label="Vegetarian"
                onChange={formik.handleChange}
                name='vegetarian'
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Button type='submit' className='mt-4' variant='contained' color='primary'>
          Create Item
        </Button>
      </form>
    </div>
  );
}
