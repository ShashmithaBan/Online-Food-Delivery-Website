import { Grid } from '@mui/material'
import React from 'react'

export const RestaurantDetail = () => {
  return (
    <div className='px-5 lg:px-20 mt-5' >
        
        <section>
            <h3 className='text-s font-bold mb-3 text-yellow-500 font-mono underline'>Home/India/India fast food/3</h3>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img className="w-full h-[40vh] object-cover"
                    src="https://cdn.pixabay.com/photo/2024/02/23/00/33/ai-generated-8591048_1280.jpg" alt="" />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <img className="w-full h-[40vh] object-cover"
                    src="https://cdn.pixabay.com/photo/2024/02/23/00/33/ai-generated-8591048_1280.jpg" alt="" />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <img className="w-full h-[40vh] object-cover"
                    src="https://cdn.pixabay.com/photo/2024/02/23/00/33/ai-generated-8591048_1280.jpg" alt="" />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <img className="w-full h-[40vh] object-cover"
                    src="https://cdn.pixabay.com/photo/2024/02/23/00/33/ai-generated-8591048_1280.jpg" alt="" />
                </Grid>
                
            </Grid>
            <div className="pb-3 mt-3">
                <h1 className="text-4xl font-extrabold">
                    India Fast Food
                </h1>
                <p className="text-md text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas iste nihil nisi, autem vel deleniti odio! Nobis id laudantium illum eius temporibus, qui veritatis unde necessitatibus officiis iste. Laboriosam, voluptas.
                </p>
            </div>
        </section>


        </div>
  )
}
export default RestaurantDetail
