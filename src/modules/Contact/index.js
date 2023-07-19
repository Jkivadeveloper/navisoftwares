import React, { useState } from 'react';
import { Card, Button, Form, Input } from 'antd';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message) {
      window.alert('Please enter a message');
      return;
    }

    // Save the contact details in the Firebase database
    addDoc(collection(db, 'contact'), {
      name,
      email,
      phoneNumber,
      message,
    })
      .then(() => {
        console.log('Contact details saved in Firebase');
        window.alert('Message sent');
        // Reset the form after successful submission
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error saving contact details:', error);
        window.alert('Failed to send message');
      });
  };

  return (
    <div className="contact">
      <div className="contact-det">
        <h2>Motorhub</h2>
        <p>Ridgeways opposite Ridgeview Inn hotels, Kenya Kiambu Road, P.O Box: 42983 - 00100 Nairobi, Kenya</p>
        <p>(254) 798 5000 000</p>
        <p>info@motorhub.co.ke</p>
      </div>
      <div className="contact-form">
        <h2>Get In touch with Us</h2>
        <p>Fill the below form. We will get back to you soon.</p>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="enter your name" value={name} onChange={handleNameChange} />
          <input type="email" placeholder="enter your email" value={email} onChange={handleEmailChange} />
          <input
            type="number"
            placeholder="enter your phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <input type="text" placeholder="enter your message" value={message} onChange={handleMessageChange} />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
