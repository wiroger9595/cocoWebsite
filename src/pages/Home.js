import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import Services from "../components/Services";
import FeatureProducts from '../components/FeaturedProducts';
import Button from '../components/Hero';

export default function Home() {

    return (
    <>
        <Hero>
    
    <Banner title = "Coconut Products Series" subtitle="100% Naturl from ">

    <Link to ="/products" className ="btn-primary">
        new Products
    </Link>
    </Banner>

    </Hero>
    <Services />
    <FeatureProducts />
    <Button>Let come</Button>
    </>
    
    );
};

//export default home;
