import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/Home1.css";

const welcomeHome = () => {
  return (
    <div>
        <header class="header">
            <nav class="navbar">
                <h1 class="logo">LIFE INSURANCE KEEP CALM AND CLAIM INSUEANCE</h1>

            </nav>
        </header>

        <section class="hero">
            <div class="hero-content">
                <h1>LIFE INSURANCE</h1>
                <p>Build financial backup & secure family’s future by choosing a “Term insurance plan”. Suitable for someone who wishes to ensure adequate financial backup is available to the family in case of his/her untimely death.</p>
                <p className="p1"> Life insurance is the best way to create wealth & secure family’s future in the event of unfortunate death of the policyholder.<br/> Life insurance can be availed either through “Term plans” that offer life cover for family’s protection or through “Investment Plans” that help in wealth creation with financial security to meet individuals financial goals.</p>
                
            </div>
        </section>
        
        
        
    </div>

            


  );
}

export default welcomeHome;