import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ClockCircleOutlined, PhoneOutlined, CarOutlined, UserOutlined, MessageOutlined, SearchOutlined } from "@ant-design/icons";
import { Card, Row, Col, Button, Input, Space } from "antd";

function Header() {
  const [buttonColor, setButtonColor] = useState("white");

  const handleButtonClick = () => {
    setButtonColor(buttonColor === "white" ? "red" : "black");
  };

  return (
    <div className="header" style={{ backgroundColor: "white", borderBottom: "5px solid black" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={8}>
          <Card>
            <div style={{ fontWeight: "bold" }}>Office hours: 8am - 5pm</div>
            <div>
              <Row>
                <Space align="center">
                  <ClockCircleOutlined />
                  <span>Call: 0727200200, 0798500000</span>
                </Space>
              </Row>
            </div>
            <Row>
              <div>
                <h4></h4>
              </div>
            </Row>
            <Row>
              <Link to="/">
                <Button type="" style={{ backgroundColor: "white" }}>
                  HOME
                </Button>
              </Link>
              <Link to='car'>
              <Button type="cars" style={{ backgroundColor: "white" }}>
                CARS
              </Button>
              </Link>
              <Link to='contact'>
              <Button type="" style={{ backgroundColor: "white" }}>
                CONTACT US
              </Button>
              </Link>
              <Link to='about'> 
              <Button type="" style={{ backgroundColor: "white" }}>
                ABOUT US
              </Button>
              </Link>
              <Link to='blog'>
              <Button type="" style={{ backgroundColor: "white" }}>
                BLOG
              </Button>
              </Link>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Card>
            <img src="https://res.cloudinary.com/pitz/image/upload/v1689323936/WhatsApp_Image_2023-07-11_at_11.25.16_AM_zye0gb.jpg" alt="Logo" style={{ height: "150px", width: "250px" }} />{" "}
          </Card>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Card>
            <div style={{ fontWeight: "bold" }}>Email: info@motorslc.com</div>
            <div>
              <Link to='login'>
              <h3>Register/Login</h3>
              </Link>
            </div>
            <Input.Search placeholder="Search" enterButton={<SearchOutlined />} />
            <div>
              <Link to='trade'>
              <Button type="" style={{ backgroundColor: "red" }} onClick={handleButtonClick}>
                Trade In
              </Button>
              </Link>
              <Link to="/finance">
                <Button type="" style={{ backgroundColor: "red" }}>
                  Financing
                </Button>
              </Link>
              <Link to='wishlist'>
              <Button type="" style={{ backgroundColor: "red" }} onClick={handleButtonClick}>
                Wishlist
              </Button>
              </Link>
              <Link to='bid'>
              <Button type="" style={{ backgroundColor: "red" }} onClick={handleButtonClick}>
                Bid
              </Button></Link>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
