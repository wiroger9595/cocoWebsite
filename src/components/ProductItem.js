import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/products-1.jpeg';


export default function ProductItem({product}) {
    const{name,slug,images,price} = product;

    return( 
     <article className ="product">
         <div className = "img-container" >
         <img src={images[0] || defaultImg} alt="item list" /> 
            <div className ="price-top">
                 <h6>{price}</h6>
             </div>

             <Link to ={ `/products/${slug}`} 
           className = "btn-primary product-link">
                 Features
            </Link > 
        </div>
     </article>
    );
}

