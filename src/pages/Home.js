import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from "../components/Services";
import FeatureProducts from '../components/FeaturedProducts';
import Button from '../components/Hero';
import GoogleApp from '../googleMap/googleApp';
import ContactInfo from '../components/ContactInfo';

export default function Home() {

    return (
    <>
        <Hero>
    
    <Banner title = "Coconut Products Series" subtitle="100% Naturl from ">
    
    {/* <Link to ="/about" className ="btn-primary">
        new About us
    </Link>
    <Link to ="/products" className ="btn-primary">
        new Products
    </Link>
    <Link to ="/message" className ="btn-primary">
        new Message
    </Link> */}
    </Banner>

            </Hero>
    <Services />
    <FeatureProducts />
    <Button>Contact Information</Button>
    <GoogleApp>
        <ContactInfo />
    </GoogleApp>
    </>
    
    );
};

//export default home;
