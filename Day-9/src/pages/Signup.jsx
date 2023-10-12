import { useState } from 'react';
import '../assets/css/Signup.css';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const navigate = useNavigate();
    const [error,setError]=useState({})
    const [signup,setSignup] = useState(
      {
        username : "",
        name: "",
        mail: "",
        password : ""
      }
    )
    // const Signup = (e) => {
    //   e.preventDefault();
    //   console.log("Logging in with username:", signup.username);
    //   console.log("Password:", signup.password);
    // };
    
    const handleChange = (e) => {
      setSignup({...signup,[e.target.id]:e.target.value})
    };

    const handleClick = (e) => {
      e.preventDefault();
      setError({});
      let validationErrors={}
      if(!signup.username.trim())
      {
        validationErrors.username="Username is required";
      }
      if(!signup.name.trim())
      {
        validationErrors.name="Name is required";
      }
      if(!signup.mail.trim())
      {
        validationErrors.mail="Email is required";
      }
      else if(!/\S+@\S+\.\S+/.test(signup.mail))
      {
        validationErrors.mail="Email is invalid";
      }
      if(!signup.password.trim())
      {
        validationErrors.password="Password is required";
      }
      else if (signup.password.length < 8) {
        validationErrors.password ="The password must be 8 characters or longer";
    }

     setError(validationErrors);
     if(Object.keys(validationErrors).length===0){
        // toast.success('Login Successful');
        navigate('/')
     }
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
                id="mail"
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