import React, { useState } from 'react'
import './Overview.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import Chart from "react-apexcharts";
import { logout} from '../../UserSlice';
import Footer from '../../Footer';
import Header from '../../Header';

const Overview = () => {
      const navigate = useNavigate() ;
      const dispatch = useDispatch();
      const handleLogout = (e) => {
            e.preventDefault();
            dispatch(logout());
            navigate("/");
      }
      
      const [state] = useState({
            options: {
              chart: {
                type: 'bar',
                height: 350,
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '65%',
                  endingShape: 'rounded',
                },
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                show: true,
                width: 6,
                colors: ['transparent'],
              },
              xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
              },
              yaxis: {
                title: {
                  text: '$ (thousands)',
                },
              },
              fill: {
                opacity: 1,
              },
              tooltip: {
                y: {
                  formatter: function (val) {
                    return '$ ' + val + ' thousands';
                  },
                },
              },
            },
            series: [
              {
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
              },
              {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
              },
              {
                name: 'Free Cash Flow',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
              },
            ],
          });
  return (
    <div>
      <Header/>
      
      <nav>
            <div className="logo-name">
                  <label className="logo">Online Services</label>
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
                   <div className="content">
                        <div className="chart-container">
                        <Chart className="chart1" options={state.options} series={state.series} type="bar" width={1050} />
                              
                        </div>
                  </div>
            </section>
            <Footer/>
    </div>
  )
}

export default Overview;