import React, { Component } from 'react';
import defaultBcg from '../images/product-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {ProductContext} from '../context';
import StyledHero from '../components/StyledHero';


export default class SingleProducts extends Component {
    constructor(props){
        super(props)
        console.log(this.props);

        this.state ={
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
static contextType = ProductContext;

    //componenetDidMount(){

    
    render() {
        
            const {getProduct} = this.context;
            const product = getProduct(this.state.slug);
            console.log(product);

            if(!product){
                return <div className="error">
                    <h3>No Product be found...</h3>
                    <Link to ='./products' className="btn-primary">
                        back to home page
                    </Link>
                </div>
            }

            const{
                name,                   
                description,
                capacity,
                size,
                extras,
                container,
                images,                
                calories,
                certification,
                non_sugar
                

            } = product;
            
            const [mainImg,...defaultImg] = images;
            console.log(defaultImg);

            return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} product`}>
                    <Link to = '/products' className="btn-primary">
                        back to home page
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-product">
                <div className = "single-product-images">
                    {defaultImg.map((item, index) => {
                    return <img key={index} src={item} alt={name} />
                    })}
                </div>
                <div className="single-product-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className ="info">
                        <h3>info</h3>
                        <h6>size : ${size} </h6>
                        <h6>
                            max capacity:{" "}
                            {capacity > 1 ? `${capacity} people` : `${capacity} person`
                            }
                        </h6>
                        <h6>{container}</h6>
                    </article>
                </div>
            </section>

            <section className="product-extras">
            <h6> Benefit of {name} </h6>
            <ul className="extras">
                {extras.map((item,index) => {

                    return <li key={index}>- {item}</li>
                })}
            </ul>

            </section>                
            </>    
            );
    }
}
