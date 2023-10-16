import { useState } from 'react';
import '../assets/css/Signup.css';
import { useNavigate } from 'react-router-dom';
import {  registerUser } from './../Components/Service/Api'

function Signup() {
    const navigate = useNavigate();
    const [error,setError]=useState({})
    const [signup,setSignup] = useState(
      {
        username : "",
        name: "",
        email: "",
        password : "",
        role:"customer"
      }
    )
    
    
    const handleChange = (e) => {
      setSignup({...signup,[e.target.id]:e.target.value})
    };

    const handleClick = (e) => {
      e.preventDefault();
      registerUser(signup)
      navigate("/Login")
      
    }

    
    
    return (
      <div className="SignupBorder">
        <div className='SignupBox'>
          <div className='SignupBoxTop'>
            <div className='SignupBoxTitle'>
           <h2>LIFE INSURANCES</h2>
              <p>JOIN US AND GROW WITH US
              </p>
            </div>
            <form className="SignupForm" onSubmit={handleClick}>
              <input
                onChange={handleChange}
                type="text"
                name="username"
                id="username"
                placeholder="Create Username"
              />
                {error.username && <span className='ErrorMsg'>{error.username}</span>}
              <input
                onChange={handleChange}
                type="text"
                name="yourname"
                id="name"
                placeholder="Enter your name"
              />
                {error.name && <span className='ErrorMsg'>{error.name}</span>}
              <input
                onChange={handleChange}
                type="text"
                name="email"
                id="email"
                placeholder="Enter E-mail"
              />
              {error.mail && <span className='ErrorMsg'>{error.mail}</span>}
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
                placeholder="Create password"
              />
                {error.password && <span className='ErrorMsg'>{error.password}</span>}
              <button type="submit"  onClick={handleClick} >Signup</button>
            </form>
          </div>
          <div className='SignupBoxBottom'>
          <h3>Already have an account? <span onClick={()=>navigate("/Login")}>Login</span></h3>
          </div>
        </div>
      </div>
    );
  }
  
  export default Signup;