import React from "react";
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';

const About_Us = () => {
    return (
    <> 
    <Hero hero ="productsHero">;
    <Banner title = "Story about First Can">

        <Link to ="/" className ="btn-primary">
            return about us
        </Link>
    </Banner>
    </Hero>
    </>
    );
}

export default About_Us;