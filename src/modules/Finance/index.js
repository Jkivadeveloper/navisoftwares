import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const { Option } = Select;

const videos = [
  {
    url: 'https://youtu.be/6gO_FGd6u2w', 
    id: 9,
  },
  {
    url: 'https://youtu.be/l_kblKxqvOY', 
    id: 1,
  },
  {
    url: 'https://youtu.be/CLnY78Z7bwU',
    id: 9,
  },
  {
    url: 'https://youtu.be/d-5ZjsAYLIY',
    id: 2,
  },
  {
    url: 'https://youtu.be/Tuya5E86LCw',
    id: 3,
  },
  {
    url: 'https://youtu.be/XYy-v3_4K1Q',
    id: 4,
  },
  {
    url: 'https://www.youtube.com/live/KTVlaMfldEM?feature=share',
    id: 5,
  },
];

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Subaru_%282019%29.svg/1200px-Subaru_%282019%29.svg.png',
  'https://www.shutterstock.com/shutterstock/photos/2268214409/display_1500/stock-vector-toyota-icon-logo-symbol-sign-identity-famous-car-brand-isolated-art-design-vector-template-2268214409.jpg',
  'https://w7.pngwing.com/pngs/58/113/png-transparent-nissan-car-logo-nissan-emblem-trademark-desktop-wallpaper.png',
  'https://logos-world.net/wp-content/uploads/2020/05/Mazda-Logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mitsubishi-logo.png/1280px-Mitsubishi-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Audi_logo_detail.svg/2560px-Audi_logo_detail.svg.png',
  'https://di-uploads-pod3.dealerinspire.com/porscheoffremont/uploads/2018/09/porsche-logo.jpg',
];

const videoDuration = 70000; 

const Finance = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [yearMin, setYearMin] = useState(2016);
  const [yearMax, setYearMax] = useState(2016);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(50000000);

  useEffect(() => {
    let timeout;

    const playNextVideo = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    timeout = setTimeout(playNextVideo, videoDuration);
   
    return () => {
      clearTimeout(timeout);
    };
  }, [currentVideoIndex]);

  const handleFindACar = () => {
    navigate('/car'); 
  };

  const handleTradeIn = () => {
    navigate('/trade'); 
  };

  const handleServiceMyCar = () => {
    navigate('/service-my-car'); 
  };

  return (
    <div>
      <div style={{ position: 'relative', paddingTop: '46.25%', marginBottom: '16px' }}>
        <ReactPlayer
          url={videos[currentVideoIndex].url}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          controls={false}
          playing
          loop
          muted
        />
      </div>

      <Card className='Home'>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={8}>
            <Button
              type=""
              style={{ backgroundColor: 'white', color: 'red' }}
              block
              onClick={handleFindACar}
            >
              FIND A CAR
            </Button>
          </Col>
          <Col xs={24} sm={8}>
            <Button
              type=""
              style={{ backgroundColor: 'red', color: 'white' }}
              block
              onClick={handleTradeIn}
            >
              TRADE IN CAR
            </Button>
          </Col>
          <Col xs={24} sm={8}>
            <Button
              type=""
              style={{ backgroundColor: 'red', color: 'white' }}
              block
              onClick={handleServiceMyCar}
            >
              SERVICE MY CAR
            </Button>
          </Col>
          <Col xs={24} sm={8}>
            <p className="text">Car</p>
          </Col>
          <Col xs={24} sm={8}>
            <Select
              value={make}
              style={{ width: '100%' }}
              placeholder="Select Make"
              onChange={(value) => setMake(value)}
            >
              <Option value="Toyota">Toyota</Option>
              <Option value="Nissan">Nissan</Option>
              <Option value="Mazda">Mazda</Option>
              <Option value="Mitsubishi">Mitsubishi</Option>
              <Option value="Audi">Audi</Option>
              <Option value="Isuzu">Isuzu</Option>
              <Option value="Mercedes">Mercedes</Option>
              <Option value="BMW">BMW</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8}>
            <Select
              value={model}
              style={{ width: '100%' }}
              placeholder="Select Model"
              onChange={(value) => setModel(value)}
            >
              <Option value="Range Rover">Range Rover</Option>
              <Option value="Toyota Hiace">Toyota Hiace</Option>
              <Option value="Toyota Prado">Toyota Prado</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8}>
            <p className="text">Years</p>
          </Col>
          <Col xs={24} sm={8}>
            <Select
              value={yearMin}
              style={{ width: '100%' }}
              placeholder="Select Min Year"
              onChange={(value) => setYearMin(value)}
            >
              <Option value={2014}>2014</Option>
              <Option value={2015}>2015</Option>
              <Option value={2016}>2016</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8}>
            <Select
              value={yearMax}
              style={{ width: '100%' }}
              placeholder="Select Max Year"
              onChange={(value) => setYearMax(value)}
            >
              <Option value={2015}>2015</Option>
              <Option value={2016}>2016</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8}>
            <p className="text">Price Range</p>
          </Col>
          <Col xs={24} sm={8}>
            <Select
              value={priceMin}
              style={{ width: '100%' }}
              placeholder="Select Min Price"
              onChange={(value) => setPriceMin(value)}
            >
              <Option value={100000}>100,000 Ksh</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8}>
            <Select
              value={priceMax}
              style={{ width: '100%' }}
              placeholder="Select Max Price"
              onChange={(value) => setPriceMax(value)}
            >
              <Option value={50000000}>50,000,000 Ksh</Option>
            </Select>
          </Col>
          <Col span={24}>
            <div style={{ width: '100%', height: 1, backgroundColor: 'black', margin: '16px 0' }}></div>
          </Col>
          <Col span={24}>
            <Button
              type=""
              shape="round"
              style={{ backgroundColor: 'red', color: 'white' }}
              block
            >
              Search
            </Button>
          </Col>
          <Col span={24}>
            <Card>
              <div className="text" style={{ textAlign: 'center' }}>
                <h1>LEADING CARS DEALER IN NAIROBI, KENYA</h1>
                <h2>SHOP CARS BY BRAND</h2>
                <h3>Shop Cars for Sale in Kenya by Brands</h3>
              </div>
            </Card>
            <Row gutter={[16, 16]} justify="center">
              {images.map((image, index) => (
                <Col xs={12} sm={8} md={6} lg={4} key={index}>
                  <Card style={{ marginBottom: '16px' }}>
                    <img
                      src={image}
                      alt={`Image ${index}`}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Card>

   
    </div>
  );
};

export default Finance;
