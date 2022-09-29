import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { listSellerOrdersApi } from '../../services/API';

export default function SellerOrder() {
  const [sellerOrders, setSellerOrders] = useState([]);

  useEffect(() => {
    (async () => {
      if (!sellerOrders.length) {
        const { data } = await listSellerOrdersApi();
        setSellerOrders(data);
      }
    })();
  }, [sellerOrders]);

  return (
    <div className="sellerOrders">
      <Header />
      {
        sellerOrders && sellerOrders.map((e) => (
          <>
            <p
              data-testid={ `seller_orders__element-order-id-${e.id}` }
            >
              {`Pedido ${e.id}`}
            </p>
            <p
              data-testid={ `seller_orders__element-delivery-status-${e.id}` }
            >
              {e.satus}
            </p>
            <p
              data-testid={ `seller_orders__element-order-date-${e.id}` }
            >
              {e.saleDate}
            </p>
            <p
              data-testid={ `seller_orders__element-card-price-${e.id}` }
            >
              {e.totalPrice}
            </p>
            <p
              data-testid={ `seller_orders__element-card-address-${e.id}` }
            >
              {e.deliveryAddress}
            </p>
          </>
        ))
      }
    </div>
  );
}
