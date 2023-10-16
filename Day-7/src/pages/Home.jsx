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
        <img src="https://media.istockphoto.com/id/1290693328/photo/family-care-concept-hands-with-paper-silhouette-on-table.jpg?s=612x612&w=0&k=20&c=ndKmKJeFdkTjQ2ivwGp4-_y3W69MsmBeqMhGAdYC9O4=" width="900" height="750"></img>
      </div>
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
      
      
  </div>
  </>
  )
}

export default Home;