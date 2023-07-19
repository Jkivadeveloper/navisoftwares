import React, { useState } from 'react';
import { Card, Divider, List, Button, Form, Input, Row, Col, message } from 'antd';
import { useCartContext } from '../../components/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../../components/AuthContext'; // Import the AuthContext
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCartContext();
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth(); 

  const handleMinusClick = (item) => {
    if (item.quantity === 1) {
      removeFromCart(item.id);
    } else {
      const updatedCartItem = { ...item, quantity: Math.max(1, item.quantity - 1) };
      addToCart(updatedCartItem);
    }
  };

  const handlePlusClick = (item) => {
    const updatedCartItem = { ...item, quantity: Math.min(20, item.quantity + 1) };
    addToCart(updatedCartItem);
  };

  const handleRemoveClick = (item) => {
    removeFromCart(item.id);
  };

  const calculateSubTotal = () => {
    const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return subTotal.toFixed(2);
  };

  const calculateTotalPrice = () => {
    const subTotal = parseFloat(calculateSubTotal());
    const deliveryFee = 450;
    const totalPrice = subTotal + deliveryFee;
    return totalPrice.toFixed(2);
  };

  const handleCreateOrder = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (!fullName || !address || !phone) {
      message.error('Please fill in all the required fields.');
      return;
    }

    try {
      
      const order = {
        fullName,
        address,
        email: user.email, 
        phone,
        cartItems,
        total: calculateTotalPrice(),
      };

      const db = getFirestore();
      const ordersCollectionRef = collection(db, 'orders');
      const newOrderRef = await addDoc(ordersCollectionRef, order);
      const referenceNumber = newOrderRef.id;

      setFullName('');
      setAddress('');
      setPhone('');
      clearCart(); 
      message.success('Order created successfully! Reference Number: ' + referenceNumber);
    } catch (error) {
      console.error('Error creating order:', error);
      message.error('Error creating order. Please try again later.');
    }
  };

  return (
    <Row justify="center" style={{ marginTop: 20 }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={8}>
        <Card title="Cart" style={{ margin: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
            {user && (
              <div style={{ marginRight: 10 }}>
                <strong>User UID: </strong>
                {user.uid}
              </div>
            )}
          </div>
          <Divider orientation="left">Cart Items</Divider>
          <List
            dataSource={cartItems}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <img src={item.image} alt={item.name} style={{ width: 70, height: 80, marginRight: 10 }} />
                <div>
                  <strong>Name: </strong>
                  {item.name}
                </div>
                <div>
                  <strong>Price: </strong>
                  Ksh. {item.price * item.quantity}
                </div>
                <div>
                  <strong>Quantity: </strong>
                  <Button onClick={() => handleMinusClick(item)}>-</Button>
                  {item.quantity}
                  <Button onClick={() => handlePlusClick(item)}>+</Button>
                  <Button onClick={() => handleRemoveClick(item)}>Remove</Button>
                </div>
              </List.Item>
            )}
          />
          <Divider orientation="left">Total Price</Divider>
          <div>
            <strong>SubTotal:Ksh. </strong>
            {calculateSubTotal()}
          </div>
          <div>
            <strong>Delivery Fee: </strong>
            Ksh. 450
          </div>
          <div>
            <strong>Total:Ksh. </strong>
            {calculateTotalPrice()}
          </div>
        </Card>
        <Card title="Order Details" style={{ margin: 20 }}>
          <Form>
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: 'Please enter your full name' }]}
            >
              <Input value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </Form.Item>
            <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter your address' }]}>
              <Input value={address} onChange={(e) => setAddress(e.target.value)} />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[{ required: true, message: 'Please enter your phone number' }]}
            >
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Item>
            <Button type="primary" onClick={handleCreateOrder}>
              Create Order
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Cart;
