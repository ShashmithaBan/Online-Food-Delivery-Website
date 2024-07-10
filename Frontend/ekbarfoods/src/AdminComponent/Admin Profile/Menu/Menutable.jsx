import { Avatar, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow  } from '@mui/material'
import React, { useEffect } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItemByRestaurantId } from '../../../Components/State/Menu/Action';

export default function MenuTables() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {restaurant , menuItem} = useSelector((store)=> store);
  const jwt = localStorage.getItem("jwt");
 console.log("menuitem",menuItem)
   useEffect(()=>{
      dispatch(getMenuItemByRestaurantId(
        {restaurantId:restaurant.userRestaurant?.id,
          jwt
        }
      ))
   },[])
  return (
    <div className='shadow-md rounded-2xl  p-5'>
        <div className="text-xl font-bold flex justify-between ">
            Menu Items
            <IconButton onClick={()=>navigate("/admin/restaurant/add-menu")}>
            <CreateIcon className='color:black'/>
            </IconButton>
            
        </div>
        <div className="mt-5">
        <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell sx={{color:"gray" , fontWeight:"Bold"}}>Id</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Image</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Title</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Ingredients</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Price</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Availability</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Delete</TableCell>
            
          </TableRow>
        </TableHead>
         {/* <TableBody>
          {menuItem.menuItems.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{color:"grey.900"}} component="th" scope="row">
                {item.id}
              </TableCell>
             
              <TableCell sx={{color:"grey.900"}} align="right"><Avatar src={item.images[0] }></Avatar></TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{item.name}</TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{item.ingredients.map((ingredients)=><Chip label={ingredients}/>)}</TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{"Burger"}</TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{"Burger"}</TableCell>
              <TableCell  align="right">
                <IconButton  aria-label='settings'><DeleteIcon sx={{color: 'red' }}/></IconButton></TableCell>
              
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
        </div>

    </div>
  )
}
