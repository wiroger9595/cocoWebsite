import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from "../components/Services";
import FeatureProducts from '../components/FeaturedProducts';
export default function Home() {

    return (
    <>
        <Hero>
    
    <Banner title = "Coconut Products Series" subtitle="fdas">

    <Link to ="/products" className ="btn-primary">
        new Products
    </Link>
    </Banner>

    </Hero>
    <Services />
    <FeatureProducts />
    </>
    
    );
};

//export default home;
