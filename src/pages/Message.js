import React, {Component} from "react";
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
//import ProductContainer from '../components/ProductContainer';

class Message extends Component {
    render(){
        return (
        
        // <Hero hero ="productHero">;
        // <Banner title = "Getting Touch with us">

        //     <Link to ="/" className ="btn-primary">
        //         return messages
        //     </Link>
        // </Banner>
        // </Hero>
        //<ProductContainer />
        
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Create Account</h1>
                <form onSubmit={this.handleSubmit} noValidate>

   {/* ----------------first name field -----------------*/}
    <div className="firstName">
        <label htmlFor="firstName">First Name</label>
        <input 
            type="text" 
            className="" 
            placeholder="First Name"
            type="text"
            name="firstName"
            noValidate
            onChange={this.handleChange}
        />
    </div>

{/* ---------------- - last name field -----------------*/}
               
    <div className="lastName">
        <label htmlFor="firstName">First Name</label>
        <input 
            type="text" 
            className="" 
            placeholder="Last Name"
            type="text"
            name="firstName"
            noValidate
            onChange={this.handleChange}
        />
    </div>

{/* ---------------- - last name field -----------------*/}


                </form>
            </div>
        </div>
        );
    }
}

export default Message;