import React, { useEffect, useState } from 'react';
import { listSellersApi } from '../../services/API';

export default function DetailsAndAddress() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const updatedSellers = async () => {
      const sellersList = await listSellersApi();
      return setSellers(sellersList);
    };
    updatedSellers();
  }, []);

  return (
    <div>
      <h2> Detalhes e Endereço de Entrega </h2>
      <label htmlFor="seller">
        P. Vendedora Responsável:
        <select id="seller" data-testid="customer_checkout__select-seller">
          { sellers && sellers.map((seller) => (
            <option key={ seller.id } value={ seller.id } label={ seller.name }>
              { `${seller.name}` }
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="address">
        Endereço
        <input
          type="text"
          id="address"
          data-testid="customer_checkout__input-address"
        />
      </label>
      <label htmlFor="number">
        Número
        <input
          type="text"
          id="number"
          data-testid="customer_checkout__input-addressNumber"
        />
      </label>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
