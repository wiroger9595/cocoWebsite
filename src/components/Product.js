// import React from 'react';
// import {Link} from 'react-router-dom';
// import defaultImg from '../images/product-1.jpeg';
// import PropTypes from  'prop-types';

// export default function Product({product}) {
//       let{name,slug,images,calories} = product;

//     return( 
//      <article className ="product">
//          <div className = "img-container" >
//          <img src={images[0] || defaultImg} alt="item list" /> 
//             <div className ="price-top">
//                  {/* <h6>{calories}</h6> */}
//              </div>

//              {/* <Link to ={ `/product/${slug}`}  */}
//            className = "btn-primary product-link ">
//                  Product 
//                  Detail
//             {/* </Link >  */}
//         </div>
//         {/* <p className ="product-info">{name}</p> */}
//      </article>
//     );
// }

// Product.propTypes = { 
//     product:PropTypes.shape({
//         name:PropTypes.string.isRequired,
//         slug:PropTypes.string.isRequired,
//         images:PropTypes.arrayOf(PropTypes.string).isRequired,
//         price:PropTypes.string.isRequired,

//     })
// }
/////////////////////////////////////////////////////////////////////////////


import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/product-1.jpeg';
import PropTypes from  'prop-types';


export default function Product({product}) {
    const{name,slug,images,calories} = product;

    return( 
     <article className ="product">
         <div className = "img-container" >
         <img src={images[0] || defaultImg} alt="item list" /> 
            <div className ="price-top">
                 <h6>{calories}</h6>
             </div>

             <Link to ={ `/products/${slug}`} 
           className = "btn-primary product-link">
                 Features
            </Link > 
        </div>
        <p className ="product-info">{name}</p>
     </article>
    );
}

Product.propTypes = { 
    product:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.string.isRequired

    })
}