import { Box, IconButton, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, colors } from '@mui/material'
import React, { useEffect } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import shadows from '@mui/material/styles/shadows';
import { CreateIngredientCategoryForm } from './CreateIngredientCategoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsCategory } from '../../../Components/State/Ingredient/Action';

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

export const IngredientCartegoryTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch();
  const {restaurant,ingredient} = useSelector((store) => store)
  
  useEffect(()=>{
    dispatch(getIngredientsCategory({
      id:restaurant.userRestaurant?.id,
      jwt
    }))
  },[])
 

  return (
    
    <div className='flex gap-3 flex-col w-full'>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <CreateIngredientCategoryForm/>
  </Box>
</Modal>
      <div className="shadow-md rounded-2xl  p-5">
      <div className="text-xl font-bold flex justify-between">
            Ingredient Category
            <IconButton onClick={handleOpen} >
            <CreateIcon />
            </IconButton>
            
        </div>
        <div className="mt-5 w-full">
        <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
          
          >
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} component="th" scope="row">Id</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="left">Name</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
          {ingredient.category.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{color:"grey.900"}} align="left" >
                {item.id}
              </TableCell>
              <TableCell sx={{color:"grey.900"}} align="left">{item.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
      </div>
    

    </div>
  )
}
