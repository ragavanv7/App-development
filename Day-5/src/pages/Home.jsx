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
      <div className="Left">
        <div className="MainTitle">
           <h6>LIFE INSURANCE<br></br> KEEP CALM AND CARRY INSURANCE</h6>
        </div>
        <div className='SubContent'>
          <br>
            </br>
        <h4>Life is unpredictable and full of Surprieses <br></br>that can impact our plan,dreams and goals.</h4>
        </div>
        <div className='Start'>
          <button class="button-54" role="button"  onClick={()=>navigate("/Login")}>JOIN US</button>
        </div>
      </div>
      <div className='Right'>
        <br></br>
        <br></br>
        <img src="https://berkettinsurance.com/wp-content/uploads/2015/10/life-ins.jpg" width="800" height="500"></img>
      </div>
      
  </div>
  </>
  )
}

export default Home;