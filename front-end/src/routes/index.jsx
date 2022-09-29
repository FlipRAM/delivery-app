import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Costumer from '../pages/Customer';
import Checkout from '../pages/Checkout';
import AdmManage from '../pages/AdmManage';
import SellerOrderDetails from '../pages/SellerOrderDetails';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer" element={ <Costumer /> } />
      <Route path="/customer/products" element={ <Costumer /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/customer/orders/:id" element={ <p>order id</p> } />
      <Route path="/admin/manage" element={ <AdmManage /> } />
      <Route path="/seller/orders/:id" element={ <SellerOrderDetails /> } />
    </Routes>
  );
}

export default AppRoutes;
