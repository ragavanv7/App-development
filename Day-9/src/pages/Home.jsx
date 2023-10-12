import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout';
import "../assets/css/Home.css";
import NavbarHome from '../Components/NavbarHome';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
    <div>
        <NavbarHome/>
    </div>
  
  <div className="MainContainer">
  <div className='Right'>
        <br></br>
        <br></br>
        <img src="https://www.jsblbank.com/blogsjsbl/financial/Encyc/2020/4/3/2_11_55_24_Insurance_1_H@@IGHT_600_W@@IDTH_800.gif" width="900" height="750"></img>
      </div>
      <div className="Left">
        <div className="Main">
           <h1>LIFE INSURANCE<br></br> KEEP CALM AND CARRY INSURANCE</h1>
        </div>
        <div className='SubContent'>
          <br>
            </br>
        <h4>Life isn't about finding yourself, Life is about creating yourself.<br></br></h4>
        </div>
        <div className='Start'>
          <button class="button-54" role="button"  onClick={()=>navigate("/Login")}>JOIN US</button>
        </div>
      </div>
      
      
  </div>
  </>
  )
}

export default Home;