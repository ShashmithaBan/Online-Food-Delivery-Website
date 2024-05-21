import React from 'react'
import { CartItem } from './CartItem'

export const Cart = () => {
  return (
    <div>
        <main className='lg:flex justify-between'>
             <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10 lg:px-5">
                <CartItem/>
             </section>
             <hr className="border-black w-full"/>
             <section className='lg:w-[70%]'>

             </section>
        </main>
    </div>
  )
}
