import React from 'react';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';
import {withProductConsumer} from '../context';
import Loading from './Loading';


// export default function ProductContainer(){
//     return(
//         <div>
            
//             <ProductFilter />
//             <ProductList />
//         </div>
//     )
// }




function ProductContainer({context}){
    const {loading,saveProducts, products} = context;
    if(loading){
            return <Loading />;

        }

        return (
            <>
                <ProductFilter products = {products}/>
                <ProductList products={saveProducts} />
            </>
        )
    }
    

export default withProductConsumer(ProductContainer)

/////////////////////////altering method/////////////////////////


// import React from 'react';
// import ProductsFilter from './ProductsFilter';
// import ProductsList from './ProductsList';
// import {ProductConsumer} from '../context';
// import Loading from './Loading';

// export default function ProductsContainer() {
//     return (
//         <ProductConsumer>
//             {value => {
//                     const {loading, sortedProducts, products} = value;

//                     if(loading){
//                         return <Loading />;

//                     }

//                     return (
//                         <div>
//                             Which Products you looking for?
//                             <ProductsFilter products = {products}/>
//                             <ProductsList products={sortedProducts} />
//                         </div>
//                     )
//                 }
//             }


//         </ProductConsumer>
        
//     );
// }
