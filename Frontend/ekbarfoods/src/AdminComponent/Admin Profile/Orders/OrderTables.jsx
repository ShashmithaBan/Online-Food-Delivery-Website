import { Avatar, AvatarGroup, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantOrders } from '../../../Components/State/RestaurantOrder/Action';

export default function OrderTables() {
  const dispatch = useDispatch();
 const {restaurantOrder , restaurant} = useSelector((store) => store)
 const jwt = localStorage.getItem("jwt")
 useEffect(()=>{
 dispatch(getRestaurantOrders(
  {
    restaurantId:restaurant.userRestaurant.id,
    jwt
  }

 ))
 },[])
  return (
    <div>
        <div className="text-xl font-bold">
            All Orders
        </div>
        <div className="mt-5">
        <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}}>Id</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Image</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Customer</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Price</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Name</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Ingredients</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Status</TableCell>
            <TableCell sx={{color:"gray" , fontWeight:"Bold"}} align="right">Update</TableCell>
          </TableRow>
        </TableHead>
         <TableBody>
          {restaurantOrder.orders.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{color:"grey.900"}} component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell  align="right">
                <AvatarGroup>
                  {item.item.map((orderItem)=>{
                    <Avatar src={orderItem.food?.images[0]}/>
                  })}
                </AvatarGroup>
              </TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{item.user.fullName}</TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{}</TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{"Burger"}</TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{"Burger"}</TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{"Completed"}</TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{"update"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>

    </div>
  )
}
