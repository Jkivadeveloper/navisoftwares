import React from "react";
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: "menu",
      label: 'Home'
    },
    {
      key: "Laptops",
      label: 'Laptops'
    },
    {
      key: "Tvs",
      label: 'Tvs'
    },
    {
      key: "menu",
      label: 'Home'
    },
    {
      key: "menu",
      label: 'Home'
    },
    {
      key: "Laptops",
      label: 'Laptops'
    },
    {
      key: "Tvs",
      label: 'Tvs'
    },
    {
      key: "Phones",
      label: 'Phones'
    },
    {
      key: "Fashion",
      label: 'Fashion'
    },
    {
      key: "Electronics",
      label: 'Electronics'
    },
    {
      key: "/",
      label: 'Home'
    },
    {
      key: "Login",
      label: 'Login'
    }
  ];

  return (
    <Menu
      items={menuItems}
      onClick={(menuItem) => navigate(menuItem.key)}
      style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}
    />
  );
};

export default SideMenu;
