import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserFromLocalStorage } from '../../Context/LocalStorage';
import { getAllSalesOfPerson } from '../../services/API';
import Header from '../../components/Header';

export default function CustomerOrders() {
  const [sales, setSales] = useState([]);
  const { id } = getUserFromLocalStorage('user');

  useEffect(() => {
    const getSales = async (idToSearch) => {
      const salesByPersonId = await getAllSalesOfPerson(idToSearch);
      return setSales(salesByPersonId);
    };
    getSales(id);
  }, [id]);

  return (
    <div>
      <Header />
      <div>
        { sales && sales.map((sale) => (
          <Link to={ `/customer/orders/${sale.id}` } key={ sale.id }>
            <div>
              <p>
                PEDIDO
                <span data-testid={ `customer_orders__element-order-id-${sale.id}` }>
                  {`000${sale.id}`}
                </span>
              </p>
              <p
                data-testid={ `customer_orders__element-delivery-status-${sale.id}` }
              >
                {`${sale.status}`}
              </p>
              <div>
                <p
                  data-testid={ `customer_orders__element-order-date-${sale.id}` }
                >
                  {`${new Date(sale.saleDate).toLocaleDateString('pt-BR')}`}
                </p>
                <p
                  data-testid={ `customer_orders__element-card-price-${sale.id}` }
                >
                  {`R$ ${sale.totalPrice.replace('.', ',')}`}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
