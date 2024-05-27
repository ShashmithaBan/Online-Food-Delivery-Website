import { Accordion, AccordionSummary,AccordionDetails,FormControlLabel, Checkbox, FormGroup, Button } from '@mui/material'
import React from 'react'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Category } from '@mui/icons-material';

const ingredients =[
  {
    category:"Protein",
    ingredients:["Ground beef" , "Mutton"]
  },
  {
    category:"Protein",
    ingredients:["Ground beef" , "Mutton" , "Chicken"]
  },
  {
    category:"Protein",
    ingredients:["Ground beef" , "Mutton" , "Chicken" , "Pork"]
  }

]
export const MenuCard = () => {
  const handleCheckBoxChange=(value)=>{
    console.log("value");
  }
  return (
    <div>
        <Accordion  >
        <AccordionSummary
          expandIcon={<ExpandCircleDownIcon  />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ color: 'black' }}
        >
          <div className="lg:flex item-center-justify-between">
            <div className="lg:flex item-center lg:gap-5">
            <img
          className='w-[7rem] h-[7rem] object-cover'
          src="https://cdn.pixabay.com/photo/2024/04/26/05/52/cheeseburger-8721189_1280.png"
          alt=""
        />
        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
          <p className="font-semibold text-2xl text-yellow-500">
            Burger
          </p>
          <p className="text-black text-lg">LKR 3000</p>
          <p className='text-gray-400'>Nice Food</p>
        </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails  >
          <form>
            <div className="flex flex-wrap gap-5 text-gray-900 px-5">
            {ingredients.map((i) =>
            <div className="text-gray-950">
                <p>{i.category}</p>
                <FormGroup>
              {i.ingredients.map((i)=>
              <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(i)} />} label= {i} />
              )}
            </FormGroup>

            </div>
            
            )}
            </div>
            <div className="pt-55">
              <Button variant='contained' type = 'submit' disabled={false}>{true?"Add to Cart":"Out of Stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
