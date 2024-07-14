import { Box, IconButton, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import { CreateFoodCategoryForm } from './CreateFoodCategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantsCategory } from '../../../State/restaurantSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
 
  boxShadow: 24,
  p: 4,
  color: "text.primary"
};

export const FoodCategoryTable = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { userRestaurant, categories, loading, error } = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  // useEffect(() => {
  //   if (userRestaurant?.id && jwt) {
    
  //     dispatch(getRestaurantsCategory({
  //       jwt,
  //       restaurantId: userRestaurant.id,
  //     }));
  //   }
  // }, [ jwt, userRestaurant?.id]);

  return (
    <div className='flex gap-3 flex-col w-full'>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateFoodCategoryForm />
        </Box>
      </Modal>
      <div className="shadow-md rounded-2xl p-5">
        <div className="text-xl font-bold flex justify-between">
          Food Categories
          <IconButton onClick={handleOpen}>
            <CreateIcon />
          </IconButton>
        </div>
        <div className="mt-5 w-full">
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "gray", fontWeight: "bold" }}>Id</TableCell>
                  <TableCell sx={{ color: "gray", fontWeight: "bold" }} align="left">Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={2} align="center">Loading...</TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell colSpan={2} align="center">{error}</TableCell>
                  </TableRow>
                ) : (
                  categories?.map((item, index) => (
                    <TableRow key={item.id || index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell sx={{ color: "text.primary" }} align="left">{item.id}</TableCell>
                      <TableCell sx={{ color: "text.primary" }} align="left">{item.name}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};
