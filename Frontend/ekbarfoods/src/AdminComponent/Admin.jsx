import React from 'react'
import { AdminSidebar } from './AdminSidebar'

const menu = [
    {title:"Dashboard" , icon:},
    {title:"Orders" , icon:},
    {title:"Menu" , icon:},
    {title:"Foodcategory" , icon:},
    {title:"Ingredients" , icon:},
    {title:"Events" , icon:<EventIcon/>},
    {title:"Details" , icon:},
    {title:"Logout" , icon:<LogoutIcon/>}
  ]

export const Admin = () => {
  return (
    <div>
        <div className="lg:flex justify-between">
            <AdminSidebar/>
        </div>
    </div>
  )
}
