import React, { useState } from 'react'
import './Dashboard.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import Chart from "react-apexcharts";
import { logout} from '../../UserSlice';
import Footer from '../../Footer';
import Header from '../../Header';

const Dashboard= () => {
      const navigate = useNavigate() ;
      const dispatch = useDispatch();
      const handleLogout = (e) => {
            e.preventDefault();
            dispatch(logout());
            navigate("/");
      }
      const [state] = useState({
            options:
            {
                  Chart:{
                        id: "basic-bar"
                  },
                  xaxis:{
                        categories: ["Service1", "Service2", "Service3" , "service4", "Service5","Service6","Service7","Service8"]
                  }
            },
            series:[
                  {
                        name: "series-1",
                        data: [1000,3000,2000,5000,3500,5500,2500,7000]
                  }
            ]
           })
    
  return (
    <div>
      <Header/>
      <nav>
            <div className="logo-name">
                  <label className="logo">Online Services</label>
                  <hr/>
            </div>
            <div className="menu-items">
            <ul className="nav-links">
                        <li>
                              <Link className='link-text' to="/adminDashboard">
                                    <span className='link-name'>Dashboard</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminServices">
                                    <span className='link-name'>Services</span>
                              </Link>
                        </li>
                        
                        <li>
                              <Link className='link-text' to="/adminCategorys">
                                    <span className='link-name'>Categorys</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminCustomer">
                                    <span className='link-name'>Customer</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminOverview">
                                    <span className='link-name'>Overview</span>
                              </Link>
                        </li>
                  </ul>
                  <ul className="logout-mod">
                        <li>
                              <Link className='link-text-logout' onClick={(e) => handleLogout(e)}>
                                    <span className="link-name">Logout</span>
                              </Link>
                        </li>
                  </ul>
            </div>
      </nav>
            
            <section className="dashboard">
                  <Header/>
            <div className="top">
                        <div className="first-panel">
                             <label className="cust">5500</label> 
                             <label className="cust-name">No. of. Customer</label> 
                        </div>
                        <div className="first-panel">
                     
                     
                     
                        <label className="cust">200</label> 
                             <label className="cust-name">No. of. Services</label>
                        </div>
                        <div className="first-panel">
                             <label className="cust">5500</label> 
                             <label className="cust-name">No.of. Categorys</label> 
                        </div>
                        <div className="first-panel">
                        <label className="cust">$5000.00</label> 
                             <label className="cust-name">Earnings Overview</label> 
                        </div>
                  </div>
                        <div className="content">
                              <div className="chart">
                              <Chart className="chart1"
                              options={state.options}
                              series={state.series}
                              type='bar'
                              width="700"/>
                              <Chart className="chart2"
                              options={state.options}
                              series={state.series}
                              type="line"
                              width="700"
                              />
                              </div>
                              
                        </div>  
                  
                 
            </section>
            <Footer/>
    </div>
  )
}

export default Dashboard;