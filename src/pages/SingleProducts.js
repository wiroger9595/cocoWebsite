import React, { Component } from 'react';
import defaultBcg from '../images/products-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {ProductContext} from '../context';



export default class SingleProducts extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }
    componenetDidMount(){

    }
    render() {
        return (
            <div>
                Single Products
            </div>
        )
    }
}
