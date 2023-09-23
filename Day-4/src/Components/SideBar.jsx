import React, { useState } from "react";
import "../assets/css/Leftbar.css";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { logout } from "../redux/userSlice";


const SideBar = ({}) => {
  const dispatch= useDispatch();
  const navigate=useNavigate();
  const logoutHandler=()=>{
    dispatch(logout())
    navigate("/")
  }
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  return (
    <nav className="navbar-menu" style={{ width: window === false ? 250 : 60 }}>
      <div className="burger" onClick={() => openClose()}>
      </div>
      <ul className="navbar__list">
          <div className="navbar__li-box">
            <li className="navbar__li" onClick={()=>navigate("/watch")}>
              Dashboard
            </li>
            </div>
          <div className="navbar__li-box">
            <li className="navbar__li">
              Account Info
            </li>
            </div>
          <div className="navbar__li-box">
            <li className="navbar__li">
              Manage Investments
            </li>
            </div>
          <div className="navbar__li-box">
            <li className="navbar__li">
            Manage Order's            
            </li>
          </div>
      </ul>
      <br></br>
      <br></br>
      <ul>
        <li>
        <Button  style={{backgroundColor: "red",font: 19}}  sx={{":hover": {bgcolor: "#FFFFFF", color: "white"}}} variant="contained" onClick={logoutHandler}>Logout</Button> 
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
