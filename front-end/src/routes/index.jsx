import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Costumer from '../pages/Customer';
import Checkout from '../pages/Checkout';
import AdmManage from '../pages/AdmManage';
import SellerOrderDetailsPage from '../pages/SellerOrderDetails';
import CustomerDetails from '../pages/CustomerDetails';
import CustomerOrders from '../pages/CustomerOrders';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer" element={ <Costumer /> } />
      <Route path="/customer/products" element={ <Costumer /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/customer/orders" element={ <CustomerOrders /> } />
      <Route path="/customer/orders/:id" element={ <CustomerDetails /> } />
      <Route path="/admin/manage" element={ <AdmManage /> } />
      <Route path="/seller/orders/:id" element={ <SellerOrderDetailsPage /> } />
    </Routes>
  );
}

export default AppRoutes;
