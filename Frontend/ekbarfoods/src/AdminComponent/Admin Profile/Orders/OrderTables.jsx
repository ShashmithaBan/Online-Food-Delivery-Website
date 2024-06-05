import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

export default function OrderTables() {
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
          {[1,1,1,1,1,1].map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{color:"grey.900"}} component="th" scope="row">
                {1}
              </TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{"image"}</TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{"Shashmitha"}</TableCell>
              <TableCell sx={{color:"grey.900"}} align="right">{"356"}</TableCell>
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
