
import React, {Component} from "react";
import {FaHeart, FaHands, FaEnvira, FaHandshake} from 'react-icons/fa';
import Title from "./Title";

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaHands/>,
                title: "Friendly and Funny",
                info: "friendly environment can produce good and health products "
            },
            {
                icon:<FaHeart/>,
                title: "Suppot Communcity",
                info: "We believe we can support some family to get education"
            },
            {
                icon:<FaEnvira/>,
                title: "100% Fresh and Nature",
                info: "Absolute no cheimcal and 100 percent comes from the land"
            },
            {
                icon:<FaHandshake/>,
                title: "Customers is our poritiy",
                info: "We know customer want healthty and decious products, we also support our supplier to success in the market"
            }
        ]
    }
    render(){
        return(
            <section className="services">
                <Title title='services' />
                <div className ="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key ={index} className ="service">
                           <span>{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                            </article>
                    })}
                </div>
            </section>
        )
    }
}




