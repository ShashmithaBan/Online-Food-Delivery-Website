import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Form } from 'react-router-dom'

export const CreateIngredientForm = () => {
const[formData , setFormData] = useState({
  name:"", 
  IngredientCartegoryId:""
})
  const handleSubmit = () =>{

    const data= {
      name : formData.categoryName,
      ingredientCartegoryId:{
        id:1,
      }
    }
    console.log(data)
  }

  const handleInputChange = (e) =>{
     const{name,value} = e.target
     setFormData({
      ...formData, [name]:value
     })
  }
  return (
    <div className=''>
      <div className="p-5 ">
        <h1 className="text-gray-400 text-center text-green-500 font-bold text-xl pb-10">Create Category</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <TextField
  fullWidth
  id="categoryName"
  name="categoryName"
  label="Category Name"
  variant="outlined"
  onChange={handleInputChange}
  value={FormData.categoryName}
  
/>
<FormControl fullWidth>
  <InputLabel  id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={formData.ingredientCartegoryId}
    label="Category"
    onChange={handleInputChange}
    name='ingredientCartegoryId'
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>

<Button type = "submit" variant="contained">
  Create Category
</Button>
        </form>
      </div>
    </div>
  )
}
