import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export const IngredientTable = () => {
  return (
    <div className='shadow-md rounded-2xl  p-5'>
        <div className="text-xl font-bold flex justify-between ">
        Ingredients
            <CreateIcon/>
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
          {[1,1,1,1,1,1,1,1,1,1,1,1,1].map((row) => (
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
             
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>

    </div>
  )
}
