import React from "react";
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import ProductContainer from '../components/ProductContainer';

const About_Us = () => {
    return (
    <> 
    <Hero hero ="productHero">;
    <Banner title = "Getting Touch with us">

        <Link to ="/" className ="btn-primary">
            return about us
        </Link>
    </Banner>
    </Hero>
    <ProductContainer />
    </>
    );
}

export default About_Us;