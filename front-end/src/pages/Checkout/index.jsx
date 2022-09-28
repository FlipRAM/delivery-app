import React from 'react';
import Header from '../../components/Header';
import CheckoutProducts from '../../components/CheckoutProducts';
import DetailsAndAddress from '../../components/DetailsAndAddress';

export default function Checkout() {
  return (
    <div>
      <Header />

      <div>
        <CheckoutProducts />
        <DetailsAndAddress />
      </div>
    </div>
  );
}
