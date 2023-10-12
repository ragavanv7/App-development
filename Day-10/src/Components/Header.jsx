import React from 'react'
import './admin/Dashboard/Dashboard.css'
import { selectUser } from './UserSlice'
import { useSelector } from 'react-redux'

const  Header= () => {
      const user = useSelector(selectUser) ;
      return( 
            <div className='header'>
                  <label>{user.email}</label>
            </div>
      )
}
export default Header