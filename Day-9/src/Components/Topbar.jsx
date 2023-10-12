import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'

function Topbar() {
  const user=useSelector(selectUser)
  return (
    <>
      <div>
          <h1>{user ? user.uername : 'Guest'}</h1>
      </div>
    </>
  )
}

export default Topbar