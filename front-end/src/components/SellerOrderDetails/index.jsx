import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  getSaleById,
  listSalesWithFullInfoApi,
  updateStatusOrderApi,
} from '../../services/API';

export default function CheckoutProducts() {
  const [sale, setSale] = useState({});
  const [productsList, setProductsList] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const { id } = useParams();

  const status4Test = 'seller_order_details__element-order-details-label-delivery-status';

  useEffect(() => {
    const getSale = async (idToSearch) => {
      const saleById = getSaleById(idToSearch);
      return setSale(saleById);
    };
    getSale(id);

    const getProducts = async (idToSearch) => {
      const productsOfSale = listSalesWithFullInfoApi(idToSearch);
      return setProductsList(productsOfSale);
    };
    getProducts(id);
  }, [id]);

  useEffect(() => {
    const price = sale.reduce(
      (previousValue, currentElement) => previousValue + (
        currentElement.price * currentElement.quantity
      ),
      0,
    );
    setTotalPrice(price);
  }, [sale]);

  const changeStatus = async (stringStatus) => {
    const saleUpdated = await updateStatusOrderApi(id, stringStatus);
    setSale(saleUpdated);
  };

  return (
    <div>
      <div>
        { sale && (
          <div>
            <p
              data-testid="seller_order_details__element-order-details-label-order-id"
            >
              {`PEDIDO ${sale.id}`}
            </p>
            <p
              data-testid="seller_order_details__element-order-details-label-order-date"
            >
              {`${sale.date}`}
            </p>
            <p
              data-testid={ status4Test }
            >
              {`${sale.status}`}
            </p>
            <button
              data-testid="seller_order_details__button-preparing-check"
              type="button"
              disabled={ sale.status === 'Pendente' }
              onClick={ () => changeStatus('Preparando') }
            >
              PREPARAR PEDIDO
            </button>
            <button
              data-testid="seller_order_details__button-dispatch-check"
              type="button"
              disabled={ sale.status === 'Preparando' }
              onClick={ () => changeStatus('Em Trânsito') }
            >
              SAIU PARA ENTREGA
            </button>
          </div>
        )}
      </div>
      <div>
        { productsList && productsList.map((product, index) => (
          <div key={ product.id }>
            <p
              data-testid={
                `seller_order_details__element-order-table-item-number-${index}`
              }
            >
              {`${index + 1}`}
            </p>

            <div>
              <p
                data-testid={ `seller_order_details__element-order-table-name-${index}` }
              >
                {product.name}
              </p>

              <div>
                <p
                  data-testid={
                    `seller_order_details__element-order-table-quantity-${index}`
                  }
                >
                  {product.quantity}
                </p>
                <p
                  data-testid={
                    `seller_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  {product.price.replace('.', ',')}
                </p>
                <p
                  data-testid={
                    `seller_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  {parseFloat(product.price * product.quantity)
                    .toFixed(2).replace('.', ',')}
                </p>
              </div>
            </div>
          </div>
        ))}
        <p>
          Total: R$
          <span data-testid="seller_order_details__element-order-total-price">
            {`${parseFloat(totalPrice).toFixed(2).replace('.', ',')}`}
          </span>
        </p>
      </div>
    </div>
  );
}
