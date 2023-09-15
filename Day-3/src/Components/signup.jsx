import { useState } from 'react';
import '../Assets/css/signup.css'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [signup,setSignup] = useState(
      {
        firstname : "",
        lastname : "",
        password : ""
      }
    )
    const Signup = (e) => {
      e.preventDefault();
      console.log("Logging in with username:", signup.username);
      console.log("Password:", signup.password);
    };
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setSignup((prevSignup) => ({
        ...prevSignup,
        [name]: value
      }));
    };
    
    return (
      <div className="SignupBorder">
        <div className='ImageBoxTitle'>
          <div className='ImageBoxQuote1'>
            <h1>RSN Bank of India</h1>
          </div>
          <div className='ImageBox1'>
          </div>
          </div>
        <div className='SignupBox'>
          <div className='SignupBoxTop'>
            <div className='SignupBoxTitle'>
            <p>Welcome to </p><h2>RSN Life</h2>
              <p>Join us, So you can never miss any updates
                and create your own recipe.
              </p>
            </div>
            <form className="SignupForm" onSubmit={Signup}>
              <input
                onChange={handleChange}
                type="text"
                name="firstname"
                id="input"
                placeholder="Enter the First Name"
                required
              />
              <input
                onChange={handleChange}
                type="text"
                name="lastname"
                id="input"
                placeholder="Enter the Last Name"
                required
              />
              <input
                onChange={handleChange}
                type="text"
                name="email"
                id="input"
                placeholder="Enter the email"
                required
              />
              <input
                onChange={handleChange}
                type="text"
                name="email"
                id="input"
                placeholder="Enter the password"
                required
              />
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="input"
                placeholder="Re-Enter the password"
                required
              />
              <button type="submit">Signup</button>
            </form>
          </div>
          <div className='SignupBoxBottom'>
          <p>Already have an account? <span onClick={()=>navigate("/login")}>Login</span></p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Signup;