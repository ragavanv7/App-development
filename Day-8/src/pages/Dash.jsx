import React, { useState } from 'react'
import '../assets/css/Dash.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import Chart from "react-apexcharts";
import { logout} from '../redux/userSlice';
import Layout from '../Components/Layout';
import SideBar from '../Components/SideBar';
import Navbar from '../Components/Navbar';

const Dash= () => {
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
                        categories: ["Policy1", "Policy2", "Policy3" , "Policy4", "Policy5","Policy6","Policy7","Policy8"]
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
      
      <Layout />
        <SideBar />
        <Navbar/>
            
            <section className="dashboard">
                  
            <div className="top">
                        <div className="first-panel">
                             <label className="cust">5500</label> 
                             <label className="cust-name">No. of. Users</label> 
                        </div>
                        <div className="first-panel">
                     
                     
                     
                        <label className="cust">200</label> 
                             <label className="cust-name">No. of. Policies</label>
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
    </div>
  )
}

export default Dash;