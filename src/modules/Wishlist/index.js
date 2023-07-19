import React from "react";

const WatchList = () => {
  return (
    <div className="main-washlist">
      <div className="watch-one">
        <p>Lorem ipsum dolor sit.</p>
        <h2>Washlist</h2>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className="watch-two1">
        <div className="watch-two-top">
          <img
            src="https://www.motorhub.co.ke/assets/images/trade-carr.jpg"
            alt=""
          />
        </div>
        <div className="watch-two-bottom">
          <h5>Trade in your car and top up to get a new one</h5>
          <h2>Trade in your car Today !!!</h2>
          <h5>Find out the worth of your car</h5>
          <div className="btn">Enquire</div>
        </div>
      </div>
      <div className="watch-two">
        <div className="watch-twoss">
          <h2>MONTHLY INSTALLMENTS CALCULATOR</h2>
          <p>
            Estimate your Monthly Payments with our car loan repayment
            calculator. If you have not yet contacted us for an indicative rate
            but wish to estimate repayments, our deposit rates start from 10% to
            40% Your actual repayments / monthly installments will depend on
            credit assessment of your application.
          </p>

          <button className="btn">CALCULATE</button>
        </div>
        <div className="watch-twoss">
          <img
            src="https://www.motorhub.co.ke/assets/images/vehicle-finance.png"
            alt=""
          />
          <h2>VEHICLE FINANCING</h2>
          <p>
            We also facilitate trade ins and arrange vehicle financing with
            financial institutions. For more details, kindly contact us:
          </p>
          <button className="btn">KNOW MORE</button>
        </div>
      </div>
      <div className="watch-two">
        <div className="watch-twoss">
          <p>Show some love to your car</p>
          <h2>SCHEDULE SERVICE ONLINE !!!</h2>
          <p>Save your time...</p>
          <button className="btn">SCHEDULE SERVICE ONLINE</button>
        </div>
        <div className="watch-twoss">
          <img
            src="https://www.motorhub.co.ke/assets/images/schedule-img.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WatchList;
