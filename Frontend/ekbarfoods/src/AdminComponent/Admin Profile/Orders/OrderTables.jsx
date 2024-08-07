import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantOrders } from '../../../State/orderSlice';
import { Avatar, AvatarGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export default function OrderTables({filterValue}) {
  const dispatch = useDispatch();
  const { userRestaurant } = useSelector((store) => store.restaurant);
  const jwt = localStorage.getItem("jwt");
  const { orders, loading, error } = useSelector((store) => store.order);
  console.log(filterValue)


  useEffect(() => {
    if (userRestaurant?.id && jwt) {
      dispatch(getRestaurantOrders({
        id: userRestaurant.id,
        jwt,
        orderStatus: filterValue 
      }));
    }
  }, [dispatch, userRestaurant, jwt, filterValue]);

  return (
    <div>
      <div className="text-xl font-bold">
        All Orders
      </div>
      <div className="mt-5">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "gray", fontWeight: "bold" }}>Id</TableCell>
                <TableCell sx={{ color: "gray", fontWeight: "bold" }} align="center">Customer</TableCell>
                <TableCell sx={{ color: "gray", fontWeight: "bold" }} align="center">Total Amount</TableCell>
                <TableCell sx={{ color: "gray", fontWeight: "bold" }} align="center">Order Status</TableCell>
                <TableCell sx={{ color: "gray", fontWeight: "bold" }} align="center">Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">Loading...</TableCell>
                </TableRow>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">{error}</TableCell>
                </TableRow>
              ) : (
                orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell sx={{ color: "red", fontWeight: "bold" }}>{order.id}</TableCell>
                    <TableCell sx={{ color: "red", fontWeight: "bold" }} align="right">{order.customer.fullName}</TableCell>
                    <TableCell sx={{ color: "red", fontWeight: "bold" }} align="right">{order.totalAmount}</TableCell>
                    <TableCell sx={{ color: "red", fontWeight: "bold" }} align="center">{order.orderStatus}</TableCell>
                    <TableCell sx={{ color: "red", fontWeight: "bold" }} align="right">{new Date(order.createdAt).toLocaleString()}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
