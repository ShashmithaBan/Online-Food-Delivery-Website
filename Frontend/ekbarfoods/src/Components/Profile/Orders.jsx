import React, { useEffect } from 'react'
import { OrderCard } from './Cards/OrderCard'
import { useDispatch } from 'react-redux'
import { getUserOrders } from '../../State/orderSlice'

const menu = [1,1,1,1,1]
export const Orders = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  useEffect(()=>{
      dispatch(getUserOrders(jwt))
  },[]);

  return (
    <div className="flex flex-col items-center justify-center pt-5">
      <h1 className="text-3xl text-center font-semibold">
        My Orders
      </h1>
      <div className="space-y-5 w-full lg:w-1/2">
        {
          menu.map((i)=>
            <OrderCard/>
          )
        }
        <OrderCard/>
      </div>
    </div>
  )
}
