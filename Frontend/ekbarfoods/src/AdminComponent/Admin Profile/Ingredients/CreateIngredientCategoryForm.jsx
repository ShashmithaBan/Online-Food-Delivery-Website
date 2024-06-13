import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Form } from 'react-router-dom'

export const CreateIngredientCategoryForm = () => {
const[formData , setFormData] = useState({name:""})
  const handleSubmit = () =>{

     
    console.log(formData)
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
        <h1 className="text-gray-400 text-center text-green-500 font-bold text-xl pb-10">Ingredient Category</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <TextField
  fullWidth
  id="name"
  name="name"
  label="Name"
  variant="outlined"
  onChange={handleInputChange}
  value={formData.name}
  
/>
<Button type = "submit" variant="contained">
  Create Category
</Button>
        </form>
      </div>
    </div>
  )
}
