import React, { Component } from 'react'
import {ProductContext, ProductsConsumer} from '../context';
import Loading from './Loading';
import ProductItem from './ProductItem';
import Title from './Title';

export default class FeaturedProducts extends Component {
    static contextType = ProductContext;
    render(){
        let {loading, featuredProducts: products} = this.context;

        products = products.map(product => {
            return <ProductItem key={product.id} product={product} />;
        })

        return (
            <section className ="featured-products"> 
                  <Title title="featured products"/>
                 <div className ="featured-products-center">
                     {loading?<Loading /> : products}
                 </div>
             </section>
        )
    }
}

