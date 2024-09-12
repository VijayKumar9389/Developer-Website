import './Contact.scss';
import React from 'react';
import Header from "../../components/Header/Header.tsx";
import {BsArrowRight} from "react-icons/bs";

const Contact = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add form submission logic here
    };

    return (
        <div className="contact-container">
            <Header heading="I would Love to Hear From You"
                    desc="Please fill out the form below and we’ll get back to you as soon as possible."/>
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">
                    My name is
                    <input type="text" id="name" name="name" placeholder="Your Name" required/>
                </label>
                <label htmlFor="interest">
                    I'm interested in
                    <textarea id="interest" name="interest" placeholder="What are you interested in?"
                              required></textarea>
                </label>
                <label htmlFor="budget">
                    My budget is
                    <select id="budget" name="budget" required>
                        <option value="">Select Your Budget</option>
                        <option value="0-500">$5000</option>
                        <option value="501-1000">$5500 - $10,000</option>
                        <option value="1001-5000">$10,000 - $15,000</option>
                        <option value="5001-10000">$15,000 - $20,000</option>
                        <option value="10000+">$20,000+</option>
                    </select>
                </label>
                <label htmlFor="email">
                    Please contact me at
                    <input type="email" id="email" name="email" placeholder="Your Email" required/>
                </label>
                <button type="submit" className="site-btn">Submit<BsArrowRight className="icon"/></button>
            </form>
        </div>
    );
}

export default Contact;