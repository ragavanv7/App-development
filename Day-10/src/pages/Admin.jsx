import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login1 } from '../redux/userSlice';
import '../assets/css/Admin.css';

function Admin() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  const [login, setLogin] = useState({
    username: '',
    email: '',
    password: '',
  });

  const predefinedCredentials = {
    username: 'ragavan',
    email: '727821tucs201@skct.edu.in',
    password: '123456789',
  };

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setError({});
    let validationErrors = {};

    if (!login.username.trim()) {
      validationErrors.username = 'User Name is required';
    }
    if (!login.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (login.email !== predefinedCredentials.email) {
      validationErrors.email = 'Email is invalid';
    }
    if (!login.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (login.password !== predefinedCredentials.password) {
      validationErrors.password = 'Incorrect password';
    }

    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(
        login1({
          username: login.username,
          email: login.email,
        })
      );
      nav('/Dashboard');
      toast.success('Login Successful');
    }
  };

  return (
    
    
    <div className="AdminLoginBorder">
      <Toaster />
      <div className="AdminLoginImageBox"></div>
      <div className="AdminLoginBox-2">
        <div className="AdminLoginBoxTop">
          <div className="AdminLoginBoxTitle">
            <h1>Admin Login</h1>
            <br />
            <h2>LIFE INSURANCES</h2>
          </div>
          <form className="AdminLoginform" onSubmit={handleClick}>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              placeholder="User Name"
            />
            {error.username && <span className="AdminErrorMsg">{error.username}</span>}

            <input
              onChange={handleChange}
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
            {error.email && <span className="AdminErrorMsg">{error.email}</span>}
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div>
            {error.password && <span className="AdminErrorMsg">{error.password}</span>}
            <div>
            <button type="submit">Login</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
