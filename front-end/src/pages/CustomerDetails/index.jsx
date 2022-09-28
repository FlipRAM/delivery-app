import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { listProductsApi, listSellersApi, listSalesApi,
  listSalesProductsApi } from '../../services/API';

export default function CostumerOrderDetails() {
  const [listProducts, setListProducts] = useState(undefined);
  const [listSellers, setListSellers] = useState(undefined);
  const [listOrders, setListOrders] = useState(undefined);
  const [listSalesProducts, setListSalesProducts] = useState(undefined);

  useEffect(() => {
    (async () => {
      if (!listProducts) {
        const { data } = await listProductsApi();
        // console.log('PRODUTOS', data);
        setListProducts(data);
      }
      if (!listSellers) {
        const data = await listSellersApi();
        // console.log('VENDEDORES', data);
        setListSellers(data);
      }
      if (!listOrders) {
        const data = await listSalesApi();
        // console.log('PEDIDOS', data);
        setListOrders(data);
      }
      if (!listSalesProducts) {
        const data = await listSalesProductsApi();
        // console.log('PEDIDOS', data);
        setListSalesProducts(data);
      }
    })();
  }, [listOrders, listProducts, listSellers, listSalesProducts]);

  return (
    <div>
      <Header />
      <p style={ { border: '50px black solid' } }>Detalhe do Pedido</p>
      <ol style={ { border: '150px gray solid' } }>
        {
          listProducts && listProducts.map((e, i) => (
            <div
              className="productsList"
              key={ i }
              style={ { border: '2px blue solid' } }
            >
              <p
                data-testid={ `customer_order_details__element-order-table-name-${i}` }
              >
                <li>{e.name}</li>
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
      </ol>
      {
        listSellers && listSellers.map((e, i) => (
          <div className="userList" key={ i } style={ { border: '2px gold solid' } }>
            <p
              data-testid={ `customer_order_details__element-order-table-name-${i}` }
            >
              {e.name}
            </p>
          </div>
        ))
      }
      {
        listOrders && listOrders.map((e, i) => (
          <div className="listOrders" key={ i } style={ { border: '2px red solid' } }>
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
        listSalesProducts && listSalesProducts.map((e, i) => (
          <div
            className="listSalesProducts"
            key={ i }
            style={ { border: '2px brown solid' } }
          >
            <p
              data-testid={ `customer_order_details__element-order-table-quantity-${i}` }
            >
              {e.quantity}
            </p>
          </div>
        ))
      }

    </div>
  );
}
