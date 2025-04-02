import React from 'react';
import './hero.css';
import hero_img from '../assets/Homepage.webp';

function Hero() {
    return (
        <div className="hero">
            <div className='hero_left'>
                <h2>Drive your business with access to reliable rides</h2>
                <p>Take care of transportation for the people who matter to your business. Create a free Lyft Business account for your organization and start moving your people today.</p>
                <div className="hero_email">
                    <input type="email" name="email" id="email" placeholder='Enter work email address*' /> 
                    <button>Create Account</button>
                </div>
                <div className='already'>
                    <p>Already using Lyft Business? <a href="">Sign in here »</a></p>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt="" />
            </div>
        </div>
    );
}

export default Hero;
