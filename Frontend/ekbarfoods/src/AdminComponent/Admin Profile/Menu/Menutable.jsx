import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow  } from '@mui/material'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

export default function MenuTables() {
  const navigate = useNavigate();
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
              <TableCell  align="right">
                <IconButton  aria-label='settings'><DeleteIcon sx={{color: 'red' }}/></IconButton></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>

    </div>
  )
}
