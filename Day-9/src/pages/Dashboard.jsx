import React from 'react'
import "../assets/css/Dashboard.css"
import {useSelector} from 'react-redux'
import { selectUser}  from "../redux/userSlice"
import Layout from "../Components/Layout"
import SideBar from '../Components/SideBar'
function Dashboard() {
    const user=useSelector(selectUser)
  return (
    <>
    <div>
        <Layout></Layout>
        <div className='Dashboard'>
          <SideBar/>
          <div className='User'>
          <h1>Welcome <span>{user.username}</span>!</h1>
          
          </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard;