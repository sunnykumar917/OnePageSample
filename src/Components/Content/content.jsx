import React from "react";
import './content.css';
import content_img from '../assets/content_img.webp';
import simle_icon from '../assets/Happy-Face-icon.svg';
import clock_icon from '../assets/clock_icon.svg';
import currency_icon from '../assets/commerce_currency_icon.svg';
import arrow from '../assets/arrow.png';
import emptyState from '../assets/enterprise_emptyState.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import healthcare from '../assets/healthcare.jpeg';
import retail from '../assets/retail.jpeg';
import automotive from '../assets/automotive.webp';
import hospitality from '../assets/hospitality.jpeg';
import goverment from '../assets/government.jpg';
import education from '../assets/education.jpeg';


function Content() {
    return (
        <div className="content">
            <div className="content_container">
            <div className="content">
    <div className="content_container">
        <div className="usmtime">
            <img src={simle_icon} alt="Happy Face Icon" />
            <h2>Upgrade Experiences</h2>
            <p>Make it easy on your people by using Lyft’s reliable transportation solutions.</p>
        </div>
        <div className="usmtime">
            <img src={clock_icon} alt="Clock Icon" />
            <h2>Save Time</h2>
            <p>Get your people where they need to go while reducing (or eliminating) time spent on manual expensing.</p>
        </div>
        <div className="usmtime">
            <img src={currency_icon} alt="Currency Icon" />
            <h2>Manage Costs</h2>
            <p>Help keep budgets under control, and review reporting on costs and usage.</p>
        </div>
    </div>
</div>

            </div>

            <div className="left-right">
                <div className="left_img">
                    <img className="left_img" src={content_img} alt="Content" />
                </div>
                <div className="content_rightside">
                    <div className="Solutions">
                        <h2>Solutions</h2>
                        <p>Ground transportation isn’t one-size-fits-all, because your people, and their lives, aren’t either. Our teams work with organizations across a wide range of industries to deliver transportation solutions made for your business.</p>
                        <ul>
                            <li className="solution-item">
                                <h4><FontAwesomeIcon icon={faGlobe} /> Business Travel</h4>
                                <p>Make business travel easy and rewarding. Plus, get insights into transportation habits to improve the experience.</p>
                            </li>
                            <li className="solution-item">
                                <h4>Commute</h4>
                                <p>Get employees where they need to be, when they need to be there, with options for your schedule and budget.</p>
                            </li>
                            <li className="solution-item">
                                <h4>Courtesy</h4>
                                <p>Get employees where they need to be, when they need to be there, with options for your schedule and budget.</p>
                            </li>
                            <li className="solution-item">
                                <h4>Healthcare</h4>
                                <p>Get employees where they need to be, when they need to be there, with options for your schedule and budget.</p>
                            </li>
                        </ul>
                        <div className="learn_more">
                            <h4>Learn More</h4>
                           <a href=""> <img src={arrow} alt="Arrow" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="every_industry">
                <h2>Solutions for every industry</h2>
                <p>A reliable ride can be a deal-breaker or a day-maker. That’s why all kinds of organizations in all kinds of industries rely on Lyft Business to provide access to rides for their customers, employees, patients, students, and guests.</p>
                <div >
                    <h4><a href="">Learn more about the industries we serve and future opportunities. </a> </h4>
                    <img src={arrow}  alt="Arrow" />
                </div>
            </div>

            <div className="box_content"> 
                <div className="box_content_s">
                    <h3>Healthcare</h3>
                    <img src={healthcare} alt="Arrow" />
                    <p>Help patients and caregivers get where they need to be</p>
                </div>
                <div className="box_content_s">
                    <h3>Automotive</h3>
                    <img src={automotive} alt="Arrow" />
                    <p>Make it fast and easy for customers to get to and from your dealership.</p>
                </div>
                <div className="box_content_s">
                    <h3>Government</h3>
                    <img src={goverment} alt="Arrow" />
                    <p>Provide access to convenient, reliable rides to employees and community members.</p>
                </div>
                <div className="box_content_s">
                    <h3>Higher Ed</h3>
                    <img src={education} alt="Arrow" />
                    <p>Give students and staff a better option to get around.</p>
                </div>
                <div className="box_content_s">
                    <h3>Retail</h3>
                    <img src={retail} alt="Arrow" />
                    <p>Get your staff to and from your stores reliably.</p>
                </div>
                <div className="box_content_s">
                    <h3>Hospitality</h3>
                    <img src={hospitality} alt="Arrow" />
                    <p>Take care of your guests at every step.</p>
                </div>
            </div>

            <div className="Product_contain">
                <div className="Product_text">
                    <p>We’ll help you find the right solution for your organization’s unique needs — whether it’s Concierge, Lyft Pass, or Business Travel Programs.</p>
                    <button>Products</button>
                </div>
                <img src={emptyState} alt="Empty State" className="Product_image" />
            </div>
        </div>
    );
}

export default Content;
