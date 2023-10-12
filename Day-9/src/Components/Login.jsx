import React, { useState } from 'react'
import ab from '../assets/css/login-bg.png'
import '../assets/css/Login.css'
import { Link, useNavigate} from 'react-router-dom'
import { login } from './UserSlice'
import { useDispatch } from 'react-redux'

const Login = () => {

  const Navigate = useNavigate();
  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;

const dispatch = useDispatch() ;
const onSubmit = (e) => {
    e.preventDefault() ;
    dispatch(
      login({
      email:email,
      password:password,
    })
    );
if(email === 'sakthi@gmail.com' && password === '098765')
{
  Navigate("/adminDashboard")
}

    
}
  return (
    <div className="login-container">
      <div className="login-img">
        <img src={ab} alt="login-bg" />
      </div>
      <div className="login-form">
        <form action="" onSubmit={(e)=> onSubmit(e)}>
          <h4>Login</h4>
          <label For="email">EMAILID:</label>
          <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}placeholder='Email'  minLength={3} maxLength={30} required/>

          <label For="password">PASSWORD:</label>
          <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}placeholder='Password'  minLength={3} maxLength={20} required/>
           <button type="submit">Login</button>
        </form>
        <div className='box'>
          <div className='forget'><Link to="/"><h3>Forget Password?</h3></Link></div>
        </div>     
           <div className='new'>
              <p> 
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </div>
      </div>
    </div>
  )
} 
export default Login