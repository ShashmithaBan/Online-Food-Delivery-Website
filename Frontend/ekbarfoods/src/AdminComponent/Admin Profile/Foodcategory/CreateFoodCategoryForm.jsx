import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from 'react-router-dom'
import { createCategory } from '../../../Components/State/Restaurant/Action'

export const CreateFoodCategoryForm = () => {
const[formData , setFormData] = useState({categoryName:"", restaurantId:""})
const dispatch = useDispatch();
  const handleSubmit = () =>{

    const data= {
      name : formData.categoryName,
      restaurantId:{
        id:1,
      }
    }
    dispatch(
      createCategory(
        {jwt:localStorage.getItem("jwt"),
          reqData:data 
          
        }
      )
    )
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
<Button type = "submit" variant="contained">
  Create Category
</Button>
        </form>
      </div>
    </div>
  )
}
