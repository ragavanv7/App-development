import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Facebook, Instagram, Github, Youtube } from 'lucide-react'
import '../assets/css/InsurancePlan.css'
const Plans = () => {
    const nav = useNavigate()

    const routeProducts = () => {
        nav('/Investment')
    }


    return (

        <div className='main'>

            <div className='home-container'>
                <div className='home-l'>
                    <p className='home-title primary'>Life Insurance </p>
                    <p className='home-data'>
                    There are several types of life insurance policies, including:

Term Life Insurance: Provides coverage for a specific term, typically 10, 20, or 30 years. It offers a death benefit if the policyholder passes away during the term.

Whole Life Insurance: Offers lifelong coverage and includes a savings or cash value component. It can be more expensive but provides long-term security.

Universal Life Insurance: Combines a death benefit with an investment component. It offers flexibility in premium payments and the potential to grow cash value.

Variable Life Insurance: Allows policyholders to invest in various sub-accounts, similar to mutual funds. It has the potential for higher returns but also comes with greater risk.

                    </p>
                </div>
                <div className='home-r'>
                    {/* <img src='https://ik.imagekit.io/nodehive/hive/illustratorx/Startup_SVG_css.svg' className='home-r-img'/> */}


                    <div className="cardx-grid">
                        <div className="cardx" onClick={routeProducts}>
                        <div className="cardx__background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518658761661-a3c568ee7b64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxpZmUlMjBpbnN1cmFuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)' }} />
                            <div className="cardx__content">
                                <p className="cardx__category ">Insurance Plans</p>
                                <h3 className="cardx__heading">Life Insurance</h3>
                            </div>
                        </div>
                        <div className="cardx" onClick={routeProducts}>
                            <div className="cardx__background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518658761661-a3c568ee7b64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxpZmUlMjBpbnN1cmFuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)' }} />
                            <div className="cardx__content">
                                <p className="cardx__category">Insurance Plans</p>
                                <h3 className="cardx__heading">Term Life Insurance</h3>
                            </div>
                        </div>
                        <div className="cardx" onClick={routeProducts}>
                            <div className="cardx__background" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1470843810958-2da815d0e041?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGlmZSUyMGluc3VyYW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)' }} />
                            <div className="cardx__content">
                                <p className="cardx__category">Insurance Plans</p>
                                <h3 className="cardx__heading">Whole Life Insurance</h3>
                            </div>
                        </div>
                        <div className="cardx" onClick={routeProducts}>
                            <div className="cardx__background" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1663090092261-d71ce4dccbfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxpZmUlMjBpbnN1cmFuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60     )' }} />
                            <div className="cardx__content">
                                <p className="cardx__category">Insurance Plans</p>
                                <h3 className="cardx__heading">Universal Life Insurance</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="social-container">
                <Link to='https://www.facebook.com'>
                    <Facebook color="#004cff" />
                </Link>
                <Link to='https://www.instagram.com'>
                    <Instagram color="#ff0059" />
                </Link>
                <Link to='https://www.github.com'>
                    <Github color="#000000" />
                </Link>
            </div>
        </div>
    )
}
export default Plans;