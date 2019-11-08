import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/products-1.jpeg';


export default function Productlist({ products }) {
    const{name,slug,images,price} = products;

    return( 
    <article className ="products">
        <div className = "img-container" >
            <img src={images || defaultImg} alt="item list" />
            <div className ="price-top">
                <h6>${price}</h6>
                <p>per item</p>
            </div>

            <Link to ={ `/products/${slug}`}
            className = "btn-primary product-link">
                Features
            </Link>
        </div>
    </article>
    );
}

