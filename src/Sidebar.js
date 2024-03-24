import React from 'react'
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaBars,

}from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


function Sidebar({children}) {
    const menuItems=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Createpackage",
            name:"Createpackage",
            icon:<FaUserAlt/>
        },
        {
            path:"/Managepackage",
            name:"Managepackage",
            icon:<FaRegChartBar/>
        },
        {
            path:"/Manageusers",
            name:"Manageusers",
            icon:<FaCommentAlt/>
        },
        {
            path:"/Managebooking",
            name:"Managebooking",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Manageissue",
            name:"Manageissue",
            icon:<FaThList/>
        },
        {
            path:"/Manageenquiries",
            name:"Manageenquiries",
            icon:<FaTh/>
        }
    ]
  return (
    <div className='container'>
        <div className='sidebar'>
            <div className='top_section'>
                <h1 className='logo'>Logo</h1>
                <div className='bars'>
                    <FaBars/>
                </div>
            </div>
            {
                menuItems.map((item,index)=>{
                    <NavLink to={item.path} keys={index} className='link' activeclassName="active">
                        <div className='icon'>{item.icon}</div>
                        <div className='link_text'>{item.name}</div>
                    </NavLink>
                })
            }
        </div>
       <main>{children}</main>
    </div>
  )
}

export default Sidebar