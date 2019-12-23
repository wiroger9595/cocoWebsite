import React, { Component } from 'react';

export default class Navbartop extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
    this.setState({isOpen: !this.state.isOpen})
    }
        render() {
            return <div className="navbartop-all">
                <navtop>
                    <div className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>

                    </div>

                    <ul className="navbartop-links">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </navtop>


                <section className="landing">
                    <img src="./svg/circles.svg" alt="dots" />
                    <h1>Dot</h1>
                </section>
            </div>
        }
    }