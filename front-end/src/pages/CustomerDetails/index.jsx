import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { listSalesWithFullInfoApi, updateStatusOrderApi } from '../../services/API';
import CustomerDetailsContainer from './styles';
import dataTestIds from './testsIds';

export default function CostumerOrderDetails() {
  const [sale, setSale] = useState({});
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      setSale(await listSalesWithFullInfoApi(id));
    })();
  }, [id]);

  const handleUpdateStatus = async () => {
    const result = await updateStatusOrderApi(id);
    setSale(result);
  };

  return (
    <CustomerDetailsContainer>
      <Header />
      <h1>Detalhe do Pedido</h1>
      {
        sale.id
          && (
            <div>
              <div className="label-order">
                <span
                  data-testid={ dataTestIds[37] }
                >
                  {`PEDIDO 000${sale.id}`}
                </span>
                <span
                  data-testid={ dataTestIds[38] }
                >
                  {sale.seller.name}
                </span>
                <span
                  data-testid={ dataTestIds[39] }
                >
                  {new Date(sale.saleDate).toLocaleDateString('pt-BR')}
                </span>
                <span
                  data-testid={ `${dataTestIds[40]}${sale.id}` }
                >
                  {sale.status}
                </span>
                <button
                  type="button"
                  disabled={ sale.status !== 'Em trânsito' }
                  onClick={ handleUpdateStatus }
                  data-testid={ dataTestIds[47] }
                >
                  MARCAR COMO ENTREGUE
                </button>
              </div>
              <div className="titulos">
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
                      className="products-list"
                      key={ i }
                    >
                      <span data-testid={ dataTestIds[41] }>{i + 1}</span>
                      <span
                        data-testid={ `${dataTestIds[42]}${i}` }
                      >
                        {e.name}
                      </span>
                      <span
                        data-testid={
                          `${dataTestIds[43]}${i}`
                        }
                      >
                        {e.salesProducts.quantity}
                      </span>
                      <span
                        data-testid={
                          `${dataTestIds[44]}${i}`
                        }
                      >
                        {`R$ ${(e.price).replace('.', ',')}`}
                      </span>
                      <span
                        data-testid={
                          `${dataTestIds[45]}${i}`
                        }
                      >
                        {`R$ ${(Number(e.price) * e.salesProducts.quantity)
                          .toString().replace('.', ',')}`}
                      </span>
                    </div>
                  ))
                }
              </div>
              <div>
                {
                  [sale] && [sale].map((e, i) => (
                    <div className="totalPrice" key={ i }>
                      <span
                        data-testid={ dataTestIds[46] }
                      >
                        {e.totalPrice.toString().replace('.', ',')}
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
          )
      }
    </CustomerDetailsContainer>
  );
}
