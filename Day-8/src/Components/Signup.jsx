import React, { useState } from 'react'
import ab from '../assets/css/login-bg.png'
import '../assets/css/Signup.css'
import { Link} from 'react-router-dom'


const Signup = () => {
      const [formdata, setFormdata] = useState({
        firstname: "",
        lastname: "",
        emailId: "",
        password: "",
        confirmpassword: ""
      });
    
      const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
          ...formdata,
          [name]: value
        });
      };
    
      const submitForm = (e) => {
        e.preventDefault();
        console.log(formdata);
      };
    
  return (
    <div className="signup-container">
      <div className="signup-img">
        <img src={ab} alt="login-bg" />
      </div>
      <div className="signup-form">
        <form action="" onSubmit={submitForm}>
          <h4>SignUp</h4>
          <label For="firstname">NAME:</label>
          <input type="text" name="firstname" id='firstname'placeholder='FirstName' onChange={handleOnChange} minLength={3} maxLength={30} required/>
          
          <label For="email">EMAILID:</label>
          <input type="email" name="email" id='email'placeholder='Email' onChange={handleOnChange} minLength={3} maxLength={30} required/>
          <label For="password">PASSWORD:</label>
          <input type="password" name="password" id='email'placeholder='Password' onChange={handleOnChange} minLength={3} maxLength={30} required/>
          <label For="confirmpassword">CONFIRMPASSWORD:</label>
          <input type="password" name="onfirmpassword" id='confirmpassword'placeholder='ConfirmPassword' onChange={handleOnChange} minLength={3} maxLength={30} required/>
           <button type="submit">Submit</button>
        </form>
      
           <div className='new'>
              <p> 
                Don't have an account? <Link to="/">Sign up</Link>
              </p>
            </div>
      </div>
    </div>
  )
} 
export default Signup;