import { useState } from 'react';
import '../Assets/css/login.css'
import { useNavigate } from 'react-router-dom';
import RSN from '../RSN.png';
function Login() {
  const navigate = useNavigate();
    const [login,setLogin] = useState(
      {
        username : "",
        password : ""
      }
    )
    const Login = (e) => {
      e.preventDefault();
      console.log("Logging in with username:", login.username);
      console.log("Password:", login.password);
    };
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLogin((prevLogin) => ({
        ...prevLogin,
        [name]: value
      }));
    };
    
    return (
      <div className="LoginBorder">
        <div className='ImageBoxTitle'>
          <div className='ImageBoxQuote'>
            <img src={RSN} alt=''></img>
            <h1>RSN Bank of India</h1>
            <h5>Hope Us</h5>
          </div>
          <div className='ImageBox'>
          
          </div>
        </div>
        <div className='LoginBox'>
          <div className='LoginBoxTop'>
            <div className='LoginBoxTitle'>
              <p>Welcome to </p><h2>RSN Life Insurance</h2>
              
              <p>Good banking is produced not by good laws, but by good bankers.
              </p>
            </div>
            <form className="LoginForm" onSubmit={Login}>
              <input
                onChange={handleChange}
                type="text"
                name="username"
                id="input"
                placeholder="Enter the username"
                required
              />
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="input"
                placeholder="Enter the password"
                required
              />
              <button type="submit">Login</button>
            </form>
          </div>
          <div className='LoginBoxBottom'>
            <p>Don't have an account? <span onClick={()=>navigate("/signup")}>Signup</span></p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;