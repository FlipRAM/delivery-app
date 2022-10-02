import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../Context/APIProvider';
import {
  getSaleById,
  updateStatusOrderApi,
} from '../../services/API';
import SellerOrderDetailsContainer from './styles';

export default function CheckoutProducts() {
  const { sale, setSale } = useContext(useAppContext);
  const { id } = useParams();

  const status4Test = 'seller_order_details__element-order-details-label-delivery-status';

  useEffect(() => {
    const getSale = async (idToSearch) => {
      const saleById = await getSaleById(idToSearch);
      setSale(saleById);
    };
    getSale(id);
  }, [id, setSale]);

  const changeStatus = async (stringStatus) => {
    const saleUpdated = await updateStatusOrderApi(id, stringStatus);

    setSale(saleUpdated.data);
  };

  return (
    <SellerOrderDetailsContainer>
      <div className="content-container">
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
              {`${new Date(sale.saleDate).toLocaleDateString('pt-BR')}`}
            </p>
            <p
              data-testid={ status4Test }
            >
              {sale.status}
            </p>
            <button
              data-testid="seller_order_details__button-preparing-check"
              type="button"
              disabled={ sale.status !== 'Pendente' }
              onClick={ () => changeStatus('Preparando') }
            >
              PREPARAR PEDIDO
            </button>
            <button
              data-testid="seller_order_details__button-dispatch-check"
              type="button"
              disabled={ sale.status !== 'Preparando' }
              onClick={ () => changeStatus('Em Trânsito') }
            >
              SAIU PARA ENTREGA
            </button>
          </div>
        )}
      </div>
      <div className="product-list-container">
        { sale && sale.product.map((product, index) => (
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
                  {product.salesProducts.quantity}
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
                  {parseFloat(product.price * product.salesProducts.quantity)
                    .toFixed(2).replace('.', ',')}
                </p>
              </div>
            </div>
          </div>
        ))}
        { sale && (
          <p>
            Total: R$
            <span data-testid="seller_order_details__element-order-total-price">
              {`${parseFloat(sale.totalPrice).toFixed(2).replace('.', ',')}`}
            </span>
          </p>
        )}
      </div>
    </SellerOrderDetailsContainer>
  );
}
