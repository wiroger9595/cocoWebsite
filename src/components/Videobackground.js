
import React, {Component} from 'react';
import sample from '../video/FirstCannedFoodThai.mp4';

class Videobackground extends Component {
    

    render () {
        return (
            <div className="fullscreen-video-all">
                <div className="fullscreen-video-wrap">
                <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
                </div>
                <div class="header-overlay"></div>
                <div className="header-content text-md-center">
                    <div className="header-content-color text-inside-center">
                        <h1>Welcome Everyone</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi ullam aperiam!</p>
                        <a className="btn">Find Out More</a>
                    </div>
                </div>
                
            </div>
        )
    }
};

export default Videobackground;