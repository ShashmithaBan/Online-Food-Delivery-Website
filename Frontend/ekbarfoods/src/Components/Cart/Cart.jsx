import React from 'react'
import { CartItem } from './CartItem'
import { Button, Card, Modal } from '@mui/material'
import '../Cart/Cart.css'
import { AddressCard } from './AddressCard'
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';

const items =[1,1]
const address = [1,1,1,1]
export const Cart = () => {
    const createOrderUsingSelectedAddress=()=>{

    }
    const handleOpenAddressModal=()=>{

    }
  return (
    <>
        <main className='lg:flex justify-between gap-2 p-2'>
             <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10 lg:px-5 shadow-lg">
             {items.map((item)=>
             <CartItem/>
            )}
            <hr className="border-gray-500 w-full"/>
            <div className="billdetails px-3 text-sm font-mono">
                <p className="font-extralight py-5">
                    Billing Details
                </p>
                <div className="space-y-3">
                    <div className="flex justify-between text-gray-700">
                        <p className="">Item Total</p>
                        <p className="">LKR 5000</p>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <p className="">Delivery Fee</p>
                        <p className="">LKR 500</p>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <p className="">Service Fee</p>
                        <p className="">LKR 500</p>
                    </div>
                </div>
                
            </div>
            <hr className="border-gray-500 w-full"/>
            <div className="flex justify-between text-gray-700 font-bold font-mono px-3">
                        <p className="">Total Fee</p>
                        <p className="">LKR 6000</p>
                    </div>
                    <hr className="border-gray-700 w-full"/>
                          
             </section>
             
             <section className='lg:w-[70%] shadow-lg flex justify-center lg:pb-0 pb-10 px-5'>
                <div className="">
                <h1 className="text-center font-semibold text-2xl py-10">
                        Choose Your Delivery Address
                </h1>
                <div className="flex flex-wrap jestify-center gap-4 items-center">
   {address.map((i)=>
                <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={i} showButton={i}/>
)}
<Card className=' gap-5 w-64 p-5' >
        <div className="icon  flex justify-center ">
        <AddLocationAltRoundedIcon color='primary'/>
        </div>
        
         <div className="p-2 space-y-3 ">
         <h2 className='flex justify-center items-center text-gray-600 font-semibold'>Add New Address</h2>
        
        <Button variant = "contained" fullWidth  onClick={handleOpenAddressModal}>
            Add
         </Button>
        </div>

    </Card>
                </div>
                    </div>
             </section>
        </main>
        
    </>
  )
}
