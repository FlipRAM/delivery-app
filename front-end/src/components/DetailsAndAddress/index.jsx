import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  getUserFromLocalStorage,
  getUserProductListToCheckout,
} from '../../Context/LocalStorage';
import { confirmSaleApi, listSellersApi } from '../../services/API';

export default function DetailsAndAddress() {
  const [user, setUser] = useState(undefined);
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [idSelected, setIdSelected] = useState(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    if (getUserFromLocalStorage('user') && !user) {
      setUser(getUserFromLocalStorage('user'));
    }
  }, [user]);

  useEffect(() => {
    const updatedSellers = async () => {
      const sellersList = await listSellersApi();
      return setSellers(sellersList);
    };
    updatedSellers();
  }, []);

  const confirmSale = async () => {
    const checkoutList = getUserProductListToCheckout('checkoutCart');
    const totalPrice = checkoutList.reduce(
      (previousValue, currentElement) => previousValue + (
        currentElement.price * currentElement.quantity
      ),
      0,
    );

    const saleObj = {
      sellerId: idSelected,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
    };
    const id = await confirmSaleApi(saleObj, checkoutList, user.token);

    return navigate(`/customer/orders/${id}`);
  };

  return (
    <div>
      <h2> Detalhes e Endereço de Entrega </h2>
      <label htmlFor="seller">
        P. Vendedora Responsável:
        <select
          id="seller"
          data-testid="customer_checkout__select-seller"
          onChange={ (event) => setIdSelected(event.target.value) }
        >
          <option value="">Selecione um vendedor</option>
          { sellers.length && sellers.map((seller) => (
            <option
              key={ seller.id }
              value={ seller.id }
              label={ seller.name }
            >
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
          value={ address }
          onChange={ (event) => setAddress(event.target.value) }
        />
      </label>
      <label htmlFor="number">
        Número
        <input
          type="text"
          id="number"
          data-testid="customer_checkout__input-address-number"
          value={ number }
          onChange={ (event) => setNumber(event.target.value) }
        />
      </label>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        disabled={ !idSelected }
        onClick={ confirmSale }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
