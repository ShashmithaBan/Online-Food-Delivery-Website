import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminRoutes } from './AdminRoutes'
import { CustomerRoutes } from './CustomerRoutes'

export const Routers = () => {
  return (
    <div>
      <Routes>
      <Route path = "/admin/restaurant/*" element = {<AdminRoutes/>}/>
        <Route path = "/*" element={<CustomerRoutes/>} />
      </Routes>
    </div>
  )
}
