import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee ,faPhone, faEnvelope, faFacebook } from '@fortawesome/free-solid-svg-icons'
import {FaAlignRight, FaTwitter} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
    this.setState({isOpen: !this.state.isOpen})
    }
    //     render() {
    //         return <nav className="footer">
    //             <div className = "footer-content">
    //                 <div className = "footer-section about">
    //                     <h1 className="logo-text"><span>Lord</span>Duke</h1>
    //                     <p>
    //                         Lord Duck is a lead bio technology in Asia, 
    //                         also provide 100% nutral products.
    //                     </p>
    //                     <div className="contact">
    //                         <span><FontAwesomeIcon icon={faPhone} /><i className="fas fa-phone"></i> &nbsp; 2713-2378</span>
    //                         <span><FontAwesomeIcon icon={faEnvelope} /><i className="fas fa-envelope"></i> &nbsp; info@lordduck.com</span> 
    //                     </div>
    //                         <div className="socials">
    //                             <a href="#"><FontAwesomeIcon icon={faCoffee} /></a>
    //                             <a href="#"><FontAwesomeIcon icon={faCoffee} /></a>
    //                             <a href="#"><FontAwesomeIcon icon={faCoffee} /></a>
    //                             <a href="#"><FontAwesomeIcon icon={faCoffee} /></a>
    //                         </div>    
                            
    //                 </div>
    //                 <div className = "footer-section links">
    //                     <h2>Quick Links</h2>
    //                     <br></br>
    //                     <ul>
    //                         <a href ="#">
    //                             Events
    //                         </a>
    //                         <a href ="#">
    //                             Team
    //                         </a>
    //                         <a href ="#">
    //                             Story
    //                         </a>
    //                         <a href ="#">
    //                             Gallery
    //                         </a>
    //                         <a href ="#">
    //                             Terms and Conditions
    //                         </a>
    //                     </ul>

    //                 </div>

    //                 <div className = "footer-section contact-form">
    //                     <h2>Contact us</h2>
    //                     <br></br>
    //                     <form action="Home.js" method="post">
    //                         <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..."></input>
    //                         <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
    //                         <button type="submit" className="btn btn-big">
    //                             <FontAwesomeIcon icon={faEnvelope} />
    //                             Send
    //                         </button>
    //                     </form>
    //                 </div>

    //             </div>

    //             <div className = "footer-bottom">
    //                 copy: codingpots.com | Design by Robert
    //             </div>
    //             {/* <div className="nav-center">
    //                 <div className = "nav-header">
    //                     <Link to="/">
    //                     <img src={logo} alt="First Can Food" />
    //                     </Link>
    //                     <button type = "button" className="nav-btn" onClick={this.handleToggle}>
    //                         <FaAlignRight className="nav-icon" />
    //                     </button>
    //                 </div>
    //                 <ul className={this.state.isOpen?"nav-links show-nav": "nav-links"}>
    //                     <li>
    //                         <Link to="/"> Home </Link>
    //                     </li>
    //                     <li>
    //                         <Link to="/about"> About Us </Link>
    //                     </li>
    //                     <li>
    //                         <Link to="/products"> Products </Link>
    //                     </li>
    //                     <li>
    //                         <Link to="/message"> Message </Link>
    //                     </li>
    //                 </ul>
    //             </div> */}
    //         </nav>
        
    // }

    render() {
        return <footer>
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-xs-12 segment-one md-mb-30 sm-mb-30">
                                    <h2>Contact Company </h2>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faCoffee} />(02)2713-2378</li>
                                        <li><FontAwesomeIcon icon={faCoffee} />60, Xingzhong Road, Neihu District, Taipei City, Taiwan 114</li>
                                        <li><FontAwesomeIcon icon={faCoffee} />salelordduck@gmail.com</li>
                                        
                                    </ul>
                                </div>

                                <div className="col-md-3 col-sm-6 col-xs-12 segment-two md-mb-30 sm-mb-30">
                                    <h2>Info</h2>
                                    <ul>
                                        <li><a href="#">Event</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Event</a></li>
                                        <li><a href="#">Career</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-12 segment-three md-mb-30 sm-mb-30">
                                    <h2>Follow Us</h2>
                                    <p>Next week, the city said a third-party engineering consultant will</p>
                                    <a href="#"><i className="fa fa-facebook"><FontAwesomeIcon icon={faCoffee} /></i></a>
                                    <a href="#"><i className="fa fa-facebook"><FontAwesomeIcon icon={faCoffee} /></i></a>
                                    <a href="#"><i className="fa fa-facebook"><FontAwesomeIcon icon={faCoffee} /></i></a>
                                </div>

                                <div className="col-md-3 col-sm-6 col-xs-12 segment-four sm-mb-30">
                                    <h2>News</h2>
                                    <p>Next week, the city said a third-party engineering consultant will</p>
                                    <form action="">
                                        <input type="email"></input>
                                        <input type="submit" value="Subscribe"></input>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    <p class="footer-bottom-text">All Right reversed by & copy;Robert.2019</p>
              </footer>
    }
    
}

