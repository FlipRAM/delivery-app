import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { listSalesWithFullInfoApi } from '../../services/API';
import CustomerDetailsContainer from './styles';

export default function CostumerOrderDetails() {
  const [sale, setSale] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setSale(await listSalesWithFullInfoApi(id));
    })();
  }, [id]);

  return (
    <CustomerDetailsContainer>
      <Header />
      <div className="titulos">
        <p>Detalhe do Pedido</p>
        <p>Item</p>
        <p>Descrição</p>
        <p>Quantidade</p>
        <p>Valor Unitário</p>
        <p>Sub-total</p>
      </div>
      <div>
        {
          sale.product && sale.product.map((e, i) => (
            <div
              className="productsList"
              key={ i }
            >
              <span>{i + 1}</span>
              <span
                data-testid={ `customer_order_details__element-order-table-name-${i}` }
              >
                {e.name}
              </span>
              <span
                data-testid={
                  `customer_order_details__element-order-table-unit-price-${i}`
                }
              >
                {e.salesProducts.quantity}
              </span>
              <span
                data-testid={
                  `customer_order_details__element-order-table-unit-price-${i}`
                }
              >
                {`R$ ${(e.price).replace('.', ',')}`}
              </span>
              <span
                data-testid={
                  `customer_order_details__element-order-table-sub-total-${i}`
                }
              >
                {`R$ ${(Number(e.price) * e.salesProducts.quantity)
                  .toString().replace('.', ',')}`}
              </span>
            </div>
          ))
        }
      </div>
      {/* {
        listSellers && listSellers.map((e, i) => (
          <div className="userList" key={ i } style={ { border: '2px gold solid' } }>
            <p
              data-testid={ `customer_order_details__element-order-table-name-${i}` }
            >
              {e.name}
            </p>
          </div>
        ))
      } */}
      {/* {
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
      } */}

    </CustomerDetailsContainer>
  );
}
