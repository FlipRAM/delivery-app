import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { getUserFromLocalStorage } from '../../Context/LocalStorage';
import { getSellerOrdersApi } from '../../services/API';
import SellerOrdersContainer from './styles';
import dataTestIds from './testIds';

export default function SellerOrder() {
  const [sellerOrders, setSellerOrders] = useState(undefined);

  useEffect(() => {
    (async () => {
      if (!sellerOrders) {
        const infosDoVendedor = getUserFromLocalStorage('user');
        const vendas = await getSellerOrdersApi(infosDoVendedor.id);
        setSellerOrders(vendas);
      }
    })();
  }, [sellerOrders]);

  return (
    <SellerOrdersContainer>
      <Header />
      <div className="seller-orders-container">
        { sellerOrders && sellerOrders.map((e, i) => (
          <Link key={ i } to={ `/seller/orders/${e.id}` }>
            <div
              className="seller-orders"
            >
              <span
                data-testid={ `${dataTestIds[48]}${e.id}` }
              >
                {`Pedido ${e.id}`}
              </span>
              <span
                data-testid={ `${dataTestIds[49]}${e.id}` }
              >
                {e.status}
              </span>
              <span
                data-testid={ `${dataTestIds[50]}${e.id}` }
              >
                {new Date(e.saleDate).toLocaleDateString('pt-BR')}
              </span>
              <span
                data-testid={ `${dataTestIds[51]}${e.id}` }
              >
                {e.totalPrice}
              </span>
              <span
                data-testid={ `${dataTestIds[52]}${e.id}` }
              >
                {e.deliveryAddress}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </SellerOrdersContainer>
  );
}
