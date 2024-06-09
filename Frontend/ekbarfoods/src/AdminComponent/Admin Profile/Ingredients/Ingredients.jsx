import React from 'react'
import { FoodCategoryTable } from '../Foodcategory/FoodCategoryTable'
import { IngredientTable } from './IngredientTable'

export const Ingredients = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full gap-3 justify-center px-10 p-10'>
        <div className=" w-full lg:w-[70%]">
          <IngredientTable/>
        </div>
        <div className=" w-full lg:w-[30%]">
        <FoodCategoryTable/>
        </div>
    </div>
  )
}
