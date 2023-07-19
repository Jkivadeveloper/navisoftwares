import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../modules/Home';
import Login from '../../modules/Login';
import HomeDetail from '../../modules/HomeDetail';
import Cart from '../../modules/Cart';
import Laptop from '../../modules/Laptop';
import LaptopDetail from '../../modules/LaptopDetail';
import Tvs from '../../modules/Tvs';
import TvsDetail from '../../modules/TvsDetail';
import ElectronicsDetail from '../../modules/ElectronicsDetail';
import FashionDetail from '../../modules/FashionDetail';
import PhonesDetail from '../../modules/PhonesDetail';
import Phones from '../../modules/Phones';
import Fashion from '../../modules/Fashion';
import Electronics from '../../modules/Electronics';
import Header from '../../modules/Header';
import Orders from '../../modules/Orders';
import OrderDetail from '../../modules/OrderDetail';
import CreateItem from '../../modules/CreateItem';

const AppRoutes = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="orderdetail/:id" element={<OrderDetail />} />
        <Route path="homedetail/:id" element={<HomeDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="laptops" element={<Laptop />} />
        <Route path="laptop/:id" element={<LaptopDetail />} />
        <Route path="tvs/:id" element={<TvsDetail />} />
        <Route path="tvs" element={<Tvs />} />
        <Route path="electronic/:id" element={<ElectronicsDetail />} />
        <Route path="fashion/:id" element={<FashionDetail />} />
        <Route path="phone/:id" element={<PhonesDetail />} />
        <Route path="phones" element={<Phones />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="orders" element={<Orders />} />
        <Route path="createitem" element={<CreateItem/>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
