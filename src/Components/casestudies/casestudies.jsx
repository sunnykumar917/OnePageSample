import React from 'react';
import './casestudies.css';
import chenimg from '../assets/case_studies1.webp';
import chenlogo from '../assets/ChenMed1.svg';
import merc from '../assets/case_studies2.webp';
import age from '../assets/case_studies3.webp';
import mer from '../assets/mercedez_benzlogo.svg';
import agero from '../assets/Agero_Logo.svg';

 const Casestudies = () => {
  return (
    <div className='casestudies'>
        <h4>CASE STUDIES</h4>
        <div className='casestudies_continer'>
            <div className='casestudies_text'>
                <p>See how Lyft Business helps organizations take care of transportation for their people.</p>
            </div>
            <div className='casestudies_box'>
                <div className='box'>
                    <img src={chenimg} className='img' alt="" />
                    <img src={chenlogo} className='logo'  alt="" /> 
                    <p>How ChenMed reduced no-shows by 20% with Lyft Assisted</p>
                    <a href="">Read more</a>
                </div>
                <div className='box'>
                    <img src={merc} className='img' alt="" />
                    <img src={mer} className='logo'  alt="" /> 
                    <p>How ChenMed reduced no-shows by 20% with Lyft Assisted</p>
                    <a href="">Read more</a>
                </div>
                <div className='box'>
                    <img src={age} className='img' alt="" />
                    <img src={agero} className='logo'  alt="" /> 
                    <p>How ChenMed reduced no-shows by 20% with Lyft Assisted</p>
                    <a href="">Read more</a>
                </div>

            </div>

        </div>

    </div>
  )
}
export default Casestudies;
