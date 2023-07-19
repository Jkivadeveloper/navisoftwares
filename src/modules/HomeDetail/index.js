import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'antd';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useCartContext } from '../../components/CartContext';
import Cart from '../Cart';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import ImageViewer from 'react-simple-image-viewer';

const HomeDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const { addToCart } = useCartContext();
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getItem = async () => {
      const db = getFirestore();
      const itemRef = doc(db, 'products', id);
      const itemSnapshot = await getDoc(itemRef);

      if (itemSnapshot.exists()) {
        const itemData = { itemID: id, ...itemSnapshot.data() };
        setItem(itemData);
        setImages(itemData.images);
      } else {
        setItem(null);
      }
    };

    getItem();
  }, [id]);

  const handleImageClick = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const handleAddToCart = () => {
    if (item) {
      const cartItem = {
        id: item.itemID,
        image: item.images[0],
        name: item.name,
        price: item.price,
        quantity: 1,
      };
      addToCart(cartItem);
      alert('Item added to cart');
    }
  };

  const handleBack = () => {
    navigate("car");
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <>
      <Card title={`TV Details`} style={{ margin: 20 }}>
        <Button type="text" icon={<ArrowLeftOutlined />} onClick={handleBack} />

        {item ? (
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12} lg={8}>
              <img
                src={selectedImage || item.images[0]}
                alt="Product"
                style={{ width: '100%', cursor: 'pointer' }}
                onClick={() => handleImageClick(0)}
              />
              <Row gutter={[8, 8]} style={{ marginTop: 16 }}>
                {item.images.map((image, index) => (
                  <Col span={6} key={index}>
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      style={{ width: '100%', cursor: 'pointer' }}
                      onClick={() => handleImageClick(index)}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs={24} md={12} lg={16}>
              <div>
                <strong>Name: </strong>
                {item.name}
              </div>
              <div>
                <strong>Price: </strong>
                {`Ksh. ${item.price}`}
              </div>
              <div>
                <strong>Description: </strong>
                {item.description}
              </div>
              <Button onClick={handleAddToCart} style={{ marginTop: 16 }} type="primary">
                Add to Cart
              </Button>
            </Col>
          </Row>
        ) : (
          <div>No product found.</div>
        )}
      </Card>
      <Cart />

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={handleCloseViewer}
        />
      )}
    </>
  );
};

export default HomeDetail;
