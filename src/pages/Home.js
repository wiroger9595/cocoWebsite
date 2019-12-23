import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from "../components/Services";
import FeatureProducts from '../components/FeaturedProducts';
import Button from '../components/Hero';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';
import ProductContainer from '../components/ProductContainer';
import GoogleLocation from '../components/GoogleMap';
import Videobackground from '../components/Videobackground';
import Navbartop from '../components/Navbartop';

export default function Home() {

    return (
    <> 
    <Navbartop />
    <Videobackground >
    
    <Banner title = "Coconut Products Series" subtitle="100% Naturl from ">

    </Banner>

   
    </Videobackground >

    
    <Services />
    <ProductContainer />
    <FeatureProducts />
    <GoogleLocation />

    <Button>Contact Information</Button>
    <Footer />
    </>
    
    );
};

//export default home;
