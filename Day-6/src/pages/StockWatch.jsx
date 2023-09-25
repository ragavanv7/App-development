// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';
import Layout from '../Components/Layout';
import SideBar from '../Components/SideBar';
import "../assets/css/StockWatch.css"
import MyChart from '../Mychart';

let tvScriptLoadingPromise;

export default function StockWatch() {
 
  const onLoadScriptRef = useRef();

  
  return (
     <>
     <Layout/>
    <div className='Dashboard'>
          <SideBar/>
          <div className='User1'>
                <div className='card'>
                  <div className='content112'>
                    <div className='box12 ONE'>
                    <div>
                    <h1>Sale of Life Insurance Polices in Years</h1>
                    <div className="simple-bar-chart">
                      <div className="item" style={{ '--clr': '#5EB344', '--val': 80 }}>
                        <div className="label">2017</div>
                        <div className="value">80%</div>
                      </div>

                      <div className="item" style={{ '--clr': '#FCB72A', '--val': 50 }}>
                        <div className="label">2018</div>
                        <div className="value">50%</div>
                      </div>

                      <div className="item" style={{ '--clr': '#F8821A', '--val': 75 }}>
                        <div className="label">2019</div>
                        <div className="value">75%</div>
                      </div>

                      <div className="item" style={{ '--clr': '#E0393E', '--val': 15 }}>
                        <div className="label">2020</div>
                        <div className="value">15%</div>
                      </div>

                      <div className="item" style={{ '--clr': '#963D97', '--val': 100 }}>
                        <div className="label">2021</div>
                        <div className="value">100%</div>
                      </div>

                      <div className="item" style={{ '--clr': '#069CDB', '--val': 90 }}>
                        <div className="label">2022</div>
                        <div className="value">90%</div>
                      </div>
                    </div>
                  </div>

                    </div>
                    <div className='box12 '>
                    </div>
                  </div>
                  <div className='content12'>
                    <div className='box12 three'></div>
                    <div className='box12'></div>
                  </div>
                </div>
            </div>
    </div>

    
    </>
  );
}
