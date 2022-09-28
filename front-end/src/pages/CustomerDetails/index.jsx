import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { listProductsApi, listSellerOrdersApi, listUserApi } from '../../services/API';

export default function StatusSales() {
  const [productsList, setProductsList] = useState([]);
  const [sellerOrders, setSellerOrders] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      if (!productsList.length) {
        const { data } = await listProductsApi();
        setProductsList(data);
      }
      if (!sellerOrders.length) {
        const { data } = await listSellerOrdersApi();
        setSellerOrders(data);
      }
      if (!userList.length) {
        const { data } = await listUserApi();
        setUserList(data);
      }
    })();
  }, [productsList.length, sellerOrders.length, userList.length]);

  return (
    <div>
      <Header />
      {
        productsList && productsList.map((e, i) => (
          <div className="productsList" key={ i } style={ { border: '2px blue solid' } }>
            <p
              data-testid={ `customer_order_details__element-order-table-name-${i}` }
            >
              {e.name}
            </p>
            <p
              data-testid={
                `customer_order_details__element-order-table-unit-price-${i}`
              }
            >
              {e.price}
            </p>
          </div>
        ))
      }
      {
        sellerOrders && sellerOrders.map((e, i) => (
          <div className="salesList" key={ i } style={ { border: '2px red solid' } }>
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
          </div>
        ))
      }
      {
        userList && userList.map((e, i) => (
          <div className="userList" key={ i } style={ { border: '2px gold solid' } }>
            <p
              data-testid={ `customer_order_details__element-order-table-name-${i}` }
            >
              {e.name}
            </p>
          </div>
        ))
      }
    </div>
  );
}
