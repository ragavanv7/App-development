import React, { useEffect, useRef } from 'react'
import Layout from '../Components/Layout'
import SideBar from '../Components/SideBar'
import '../assets/css/Smart.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'

export default function Smart() {
  const onLoadScriptRef = useRef()
  const user = useSelector(selectUser)
  const username = user.username
  const email = user.email
  const profileInfo = {
    username: username,
    age: 30,
    email: email,
    role: 'Administrator',
  }

  return (
    <>
      <Layout />
      <div className="Dashboard">
        <SideBar />
        <div className="home">
          <div className="main-content">
            <header>
              <div className='admin'>
              <h1 style={{ color: 'black',padding:'80px',marginLeft:'300px' }}>Admin profile</h1>
              </div>
            </header>
            <table className="profile-table" style={{margin:'0 auto',borderCollapse:'collapse'}}>
              <tbody>
                <tr>
                  <td>
                    <strong>Username:</strong>
                  </td>
                  <td style={{ color: 'black'}}>{profileInfo.username}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Age:</strong>
                  </td>
                  
                  <td style={{ color: 'black' }}>{profileInfo.age}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Email:</strong>
                  </td>
                  <td style={{ color: 'black',  letterSpacing:'2px'}}>{profileInfo.email}</td>
                </tr>
                <tr>
                  <td>
                    <strong>role:</strong>
                  </td>
                  <td style={{ color: 'black' }}>{profileInfo.role}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}