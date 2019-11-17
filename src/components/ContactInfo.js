import React from 'react';
import Banner from './Banner';

export default function ContactInfo({children, title, subtitle}) {
    // return (
    //     <div className="banner">
    //         <h1>{title}</h1>
    //         <div></div>
    //         <p>{subtitle}</p>
    //         {children}
    //     </div>
    // );
    return (
    <Banner 
        title = "Contact Info" 
        subtitle="Number: (02)2713-2378 ">hello</Banner>
    )
}