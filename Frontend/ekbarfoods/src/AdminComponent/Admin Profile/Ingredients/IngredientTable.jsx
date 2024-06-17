import React, { useEffect } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { Box, IconButton, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { CreateFoodCategoryForm } from '../Foodcategory/CreateFoodCategoryForm';
import { CreateIngredientForm } from './CreateIngredientForm';
import { getIngredientOfRestaurant } from '../../../Components/State/Ingredient/Action';
import { useDispatch, useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  shadows:"1px",
  boxShadow: 24,
  p: 4,
  color:"black"
};

export const IngredientTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch();
  const {restaurant,ingredient} = useSelector((store) => store)
  
  useEffect(()=>{
    dispatch(getIngredientOfRestaurant({
      id:restaurant.userRestaurant?.id,
      jwt
    }))
  },[])
  return (
    <div className='shadow-md rounded-2xl  p-5'>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <CreateIngredientForm/>
  </Box>
</Modal>
        <div className="text-xl font-bold flex justify-between ">
        Ingredients
        <IconButton onClick={handleOpen}>
        <CreateIcon/>
        </IconButton>
            
        </div>
        <div className="mt-5">
        <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell sx={{color:"gray" , fontWeight:"Bold"}}>Id</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Name</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Category</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Availability</TableCell>
        
          </TableRow>
        </TableHead>
         <TableBody>
          {ingredient.ingredients.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <TableCell sx={{color:"grey.900"}} component="th" scope="row">
                {1}
              </TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{item.name}</TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{item.category.name}</TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{item.inStock?"instock":"out_of_stock "}</TableCell>
             
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>

    </div>
  )
}
