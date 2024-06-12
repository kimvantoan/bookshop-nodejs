import React from 'react'
import SideBar from '../sidebar/SideBar'

const LayoutAdmin = ({children}) => {
  return (
    <div className='flex gap-5 bg-blue-50'>
        <SideBar/>
        <main>{children}</main>
    </div>
  )
}

export default LayoutAdmin