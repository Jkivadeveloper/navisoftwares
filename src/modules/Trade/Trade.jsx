import { Card } from "@material-ui/core";
import React, { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Trade = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [license, setLicense] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber || !make || !model || !year || !license) {
      alert("Please fill in all required fields.");
      return;
    }

    addDoc(collection(db, 'trade'), {
      
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        make: make,
        model: model,
        year: year,
        license: license,
      })
      .then(() => {
        alert("Information submitted successfully.");
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMake("");
        setModel("");
        setYear("");
        setLicense("");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        alert("An error occurred while submitting the form. Please try again.");
      });
  };

  return (
    <div className="trade-in">
      <h1>Trade In</h1>
      <h6>
        Trade in your car and top up to get a new one. Are you interested in
        Trading in your vehicle? Text Motorhub to 20360 / call us via 0727 200
        200 and 0798 500 000 Or fill the form below and find out the worth of
        your car.
      </h6>

      <div className="trade-in-card">
        <img
          src="https://www.motorhub.co.ke/assets/images/trade-carr.jpg"
          alt=""
        />
        <Card className="trade-card">
          <h1>SELL YOUR CAR TODAY !!!</h1>
          <h4>Fill the below form. We will get back to you soon.</h4>
          <form className="trade-form" onSubmit={handleFormSubmit}>
            <div className="one">
              <div className="one-sec">
                <div>
                  <label htmlFor="name">Name</label>
                </div>
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="one-sec">
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="one">
              <div className="one-sec">
                <div>
                  <label htmlFor="phoneNumber">Phone Number</label>
                </div>
                <div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="one-sec">
                <div>
                  <label htmlFor="make">Make</label>
                </div>
                <div>
                  <input
                    type="text"
                    id="make"
                    placeholder="Make"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="one">
              <div className="one-sec">
                <div>
                  <label htmlFor="model">Model</label>
                </div>
                <div>
                  <input
                    type="text"
                    id="model"
                    placeholder="Model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </div>
              </div>
              <div className="one-sec">
                <div>
                  <label htmlFor="year">Year</label>
                </div>
                <div>
                  <input
                    type="number"
                    id="year"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="one">
              <div className="one-sec">
                <div>
                  <label htmlFor="license">License Plate</label>
                </div>
                <div>
                  <input
                    type="text"
                    id="license"
                    placeholder="License Plate"
                    value={license}
                    onChange={(e) => setLicense(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <p style={{ padding: "2rem" }}>
              I agree to receive marketing emails from MotorHub
              <br />
              <input type="checkbox" id="agreeCheckbox" />
              <br />
              <br />
              Kindly note that these emails include but are not limited to newsletters, promotional offers, and announcements from MotorHub. Each email you receive from us provides a one-click method to unsubscribe from the distribution list.
              <br />
              <br />
              <input type="checkbox" id="privacyCheckbox" />
              <br />
              <br />
              I have read and agree to MotorHub's Privacy Policy & Terms Of Use.
            </p>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Trade;
