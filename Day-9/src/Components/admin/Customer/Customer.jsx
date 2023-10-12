import React, { useState } from 'react'
import './Customer.css'
import DataTable from 'react-data-table-component'
import Header from '../../Header'
import Footer from '../../Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { logout} from '../../UserSlice';

const Customer= () => {
      const navigate = useNavigate() ;
      const dispatch = useDispatch();
      const handleLogout = (e) => {
            e.preventDefault();
            dispatch(logout());
            navigate("/");
      }
      
      const column = [
            {
                  name:'Name',
                  selector: row => row.name,
                  sortable: true,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        fontWeight:"500"
                  }
            },
            {
                  name:'Email-id',
                  selector: row => row.email,
                  sortable: true,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        fontWeight:"500"
                  }
            },
            {
                  name:'Tracking-Id',
                  selector: row => row.Trackingid,
                  sortable: true,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        fontWeight:"500"
                  }
            },
            {
                  name:'ServiceType',
                  selector: row => row.available,
                  sortable: true,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        fontWeight:"500"
                  }
            },
            {
                  name:'Status',
                  selector: row => row.status,
                  sortable: true,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        fontWeight:"500"
                  }
            },
            {
                  name:'Edit',
                  cell:(row) => <button className='btn'>Edit</button>,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                  }
            },
            {
                  name:'Delete',
                  cell:(row) => <button className='btndel'>Delete</button>,
                  style:{
                        fontSize:"14px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        padding:"20px 0",
                  }
            },
            
      ]
      const data = [
            {
                  id: 1,
                  name: "SAKTHI M",
                  email: "sakthi1003@gmail.com",
                  available: "Home Service",
                  Trackingid:"12345",
                  status: "Apporved",

                  action: "",
            },
            {
                  id: 2,
                  name: "JANA",
                  email: "jana12@gmail.com",
                  Trackingid:"12345",
                  available: "Personal Care Service",
                  status: "Apporved",
                  action: "",
            },
            {
                  id: 3,
                  name: "Sneha k",
                  email: "sneha31@gmail.com",
                  Trackingid:"12345",
                  available: "Pet Care",
                  status: "Pending",
                  action: "",
            },
            {
                  id: 4,
                  name: "VASANTH",
                  email: "vasanth2231@gmail.com",
                  Trackingid:"12345",
                  available: "Health Care",
                  status: "Apporved",
                  action: "",
            },
            
      ]
      const[records, setRecords] = useState(data);
      function handleFilter(event)
      {
            const newData = data.filter(row => {
                  return row.name.toLowerCase().includes(event.target.value.toLowerCase())
            })
            setRecords(newData)
      }
      const tableCustomer = {
            headCells:{
                  style:{
                        fontSize:'20px',
                        fontWeight:'600',
                        padding:'30px',
                        display:"flex",
                        justifyContent:"center",
                  }
            }
      }

  return (
    <div className='main-pol'>
      <Header/>
      <nav>
            <div className="logo-name">
                  <label className="logo"><strong>Online </strong>Services</label>
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
      
      <section className="policy">
            <h1>Customers Details</h1>
            <div className="table">
                  <DataTable columns={column} data={records} className='table1' fixedHeader
                  customStyles={tableCustomer}
                  highlightOnHover
                  actions={<button className='btn-ex'>Export</button>}
                  subHeader
                  subHeaderComponent={<input className='input-search' type="text" placeholder='Search Here' onChange={handleFilter}></input>}>

                  </DataTable>
            </div>
            
      </section>
      <Footer/>
    </div>
  )
}

export default Customer