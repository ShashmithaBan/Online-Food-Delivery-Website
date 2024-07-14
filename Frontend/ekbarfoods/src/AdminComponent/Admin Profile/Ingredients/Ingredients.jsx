import React from 'react'

import { IngredientTable } from './IngredientTable'
import { IngredientCartegoryTable } from './IngredientCategoryTable'

export const Ingredients = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full gap-3 justify-center px-10 p-10'>
        <div className=" w-full lg:w-[70%]">
          {/* <IngredientTable/> */}
        </div>
        <div className=" w-full lg:w-[30%]">
        <IngredientCartegoryTable/>
        </div>
    </div>
  )
}
