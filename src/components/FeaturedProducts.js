import React, { Component } from 'react'
import {ProductContext, ProductsConsumer} from '../context';
import Loading from './Loading';
import Productlist from './Productlist';
import Title from './Title';

export default class FeaturedProducts extends Component {
    static contextType = ProductContext;
    render(){
        let {loading, featuredProducts: products} = this.context;

        products = products.map(product => {
            return <Productlist key={products.id} products={products} />
        })

        return (
            <section className ="featured-products"> 
                 <Title title="featured products" />
                 <div className="featured-product-center">

                     {loading ? <Loading /> : products}
                 </div>
                <Loading />
            </section>
        )
    }
}

