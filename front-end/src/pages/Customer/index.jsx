import React from 'react';
import Header from '../../components/Header';
import ProductCards from '../../components/ProductCards';
import { CustomerProductsCards, CustomerProductsContainer } from './styles';

export default function Customer() {
  return (
    <CustomerProductsContainer>
      <Header />

      <CustomerProductsCards>
        <ProductCards />
      </CustomerProductsCards>
    </CustomerProductsContainer>
  );
}
