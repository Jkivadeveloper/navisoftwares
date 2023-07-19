import { Card } from "antd";

const About = () => {
  return (
    <div className="main-about">
      <h1>About Us</h1>
      <div className="about-top">
        <p>
          Motorhub Limited is a car dealership incorporated in Kenya dealing
          with importation and sale of new and second-hand Motor Vehicles. At
          Motorhub, we pride ourselves in offering quality and carefully sourced
          Vehicles, guided by our core values and a burning desire to satisfy
          customer needs. Vehicles in our dealership are sourced from Japan,
          Thailand, United Kingdom, Australia, South Africa and host of other
          countries to ensure variety of units to meet market demand.
        </p>
      </div>
      <div className="core-values">
        <div>
          <img
            src="https://www.motorhub.co.ke/assets/images/reliability.png"
            alt=""
          />
          <p>Rekiability</p>
        </div>
        <div>
          <img
            src="https://www.motorhub.co.ke/assets/images/integrity.png"
            alt=""
          />
          <p>Integrity</p>
        </div>
        <div>
          <img
            src="https://www.motorhub.co.ke/assets/images/customer%20-service.png"
            alt=""
          />
          <p>Customer Care</p>
        </div>
        <div>
          <img
            src="https://www.motorhub.co.ke/assets/images/customer-satisfaction.png"
            alt=""
          />
          <p>Customer Satisfaction</p>
        </div>
      </div>

      <div className="mission">
        
          
          <div>
          <img
              src="https://www.motorhub.co.ke/assets/images/who-we-are.jpg"
              alt=""
            />
          </div>
            <div className="mission-left">
            <div>
              <h1>Our Services</h1>
              <ul className="lis">
                <li>
                  Direct sale of brand new, foreign used and locally used
                  Vehicles to both individuals and corporates.
                </li>
                <li>
                  Imports on behalf - allowing customers to ship in their
                  desired Vehicle without the hassle and logistical complexities
                  involved.
                </li>
                <li>
                  A service center offering Motor Vehicle maintenance services,
                  such as respray, panel beating, upgrades, accessories and
                  parts.
                </li>
                <li>
                  Trade-ins to allow clients to conveniently upgrade from
                  current Vehicle to a newer and fresher unit. The trade-in
                  Vehicle then covers part of the purchase price for their
                  desired car.
                </li>
              </ul>
            </div>
            {/* <div>
              <img
                src="https://www.motorhub.co.ke/assets/images/tailored-service.jpg"
                alt=""
              />
            </div> */}
          </div>
        </div>
        <div className="mission">
          <div className="lis">
            <h1>OUR MISSION</h1>
            <p>
              To offer excellent customer satisfaction by providing affordable
              and top-of-the-range Motor Vehicles.
            </p>
            <h1>VISION</h1>
            <p>
              To be the number one dealer choice for individual and corporate
              buyers of Motor Vehicles in Kenya and beyond, as well as offering
              Motor vehicle advisory services and mechanical/technical support
              to all our customers.
            </p>
          </div>
        
        <div>
          <img
            src="https://www.motorhub.co.ke/assets/images/our-services.jpg"
            alt=""
          />
        </div>
        </div>
        <div className="mission">
          <div>
            <img src="https://www.motorhub.co.ke/assets/images/tailored-service.jpg" alt="" />
          </div>
          <div className="lis">
          <h1>TAILORED SERVICES TO CORPORATE CLIENTS</h1>
          <ul>
            <li>
              Specialized partnership offers and discounts on bulk orders.
            </li>
            <li>
              A wide variety of Vehicle options for convenient transportation of
              staff, students and other corporate and company stakeholders.
            </li>
            <li>
              Convenience of Vehicle service and maintenance of a company’s
              entire fleet under one roof.
            </li>
            <li>
              Aftermarket installation of special car parts and modification.
            </li>
            <li></li>
          </ul>
          </div>
          
        </div>
     
    </div>
  );
};

export default About;
