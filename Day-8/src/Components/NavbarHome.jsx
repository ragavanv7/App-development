import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { logout } from "../redux/userSlice";

import "../assets/css/Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";


const NavbarHome = () => {
  const dispatch= useDispatch();
  const navigate=useNavigate();
  const logoutHandler=()=>{
    dispatch(logout())
    navigate("/")
  }

 
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>L</span>ife
            <span>I</span>nsurance
          </h2>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About us</NavLink>
            </li>
            <li>
              <NavLink to="">Contact us</NavLink>
            </li>
            <li>
              <NavLink to="">Insurance Plan</NavLink>
            </li>
            <li>
              <div className="privacy">
              <NavLink to="/Policy">Privacy Policy</NavLink>
              </div>
            </li>
            <li>
              <div className="terms">
              <NavLink to="/Terms">Terms and Conditions</NavLink>
              </div>
              <div className="question">
              <NavLink to="/FAQ">FAQ</NavLink>
              </div>
            </li>
            
          </ul>
        </div>

       
      </nav>
    </>
    
  );
};

export default NavbarHome;