import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { logout } from "../redux/userSlice";
import { Facebook, Instagram, Github } from 'lucide-react'


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
            <li className="Nav-Home">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="Nav-About">
              <NavLink to="/About">About us</NavLink>
            </li>
            <li className="Nav-Contact">
              <NavLink to="/Contact">Contact us</NavLink>
            </li>
            <li className="Nav-Plans">
              <NavLink to="/InsurancePlans">Insurance Plan</NavLink>
            </li>
            <li className="Nav-Admin">
              <NavLink to="/AdminLogin">Admin Login</NavLink>
            </li>
            <li className="Nav-Inv">
              <NavLink to="/Investment">Apply Policy</NavLink>
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
            </li>
            <li>
              <div className="question">
              <NavLink to="/FAQ">FAQ</NavLink>
              </div>
            </li>
            
          </ul>
            <div className="social-container">
                <NavLink to='https://www.facebook.com'>
                    <Facebook color="#004cff" />
                </NavLink>
                <NavLink to='https://www.instagram.com'>
                    <Instagram color="#ff0059" />
                </NavLink>
                <NavLink to='https://www.github.com'>
                    <Github color="#000000" />
                </NavLink>
            </div>
        </div>

       
      </nav>
    </>
  );
};

export default NavbarHome;