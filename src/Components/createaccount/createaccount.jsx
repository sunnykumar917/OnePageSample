import React from 'react';
import './createaccount.css';
import core_drivencrea from'../assets/core_drivencrea.webp'
import arrow from '../assets/arrow.png';

 const Createaccount = () => {
  return (
    <div className='createaccount'>
    <div className='createaccount_container'>
        <div className='createaccount_img'>
            <img src={core_drivencrea} alt="Core Driven Creation" />
        </div>
        <div className='createaccount_text'>
            <h2>Get started today</h2>
            <p>Taking care of transportation for the people who matter to your organization is easy. Create an account for your organization.</p>
            <button> Create account</button>
            <a href="">Visit our support center <img src={arrow} alt="Arrow" /></a>
        </div>
    </div>
</div>

  )
}
export default Createaccount;


