import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';

export const FoodCategoryTable = () => {
  return (
    <div className='flex gap-3 flex-col w-full'>
      <div className="shadow-md rounded-2xl  p-5">
      <div className="text-xl font-bold flex justify-between">
            All Orders
            <CreateIcon/>
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
          {[1,1,1,1,1,1].map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{color:"grey.900"}} align="left" >
                {1}
              </TableCell>
              <TableCell sx={{color:"grey.900"}} align="left">{"Shashmitha"}</TableCell>
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
