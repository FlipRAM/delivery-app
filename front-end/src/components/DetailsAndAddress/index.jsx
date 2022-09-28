import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  getUserFromLocalStorage,
  getUserProductListToCheckout,
} from '../../Context/LocalStorage';
import { confirmSaleApi, listSellersApi, getUserId } from '../../services/API';

export default function DetailsAndAddress() {
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [idSelected, setIdSelected] = useState(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    const updatedSellers = async () => {
      const sellersList = await listSellersApi();
      return setSellers([{ id: 0, name: 'Selecione' }, ...sellersList]);
    };
    updatedSellers();
  }, []);

  useEffect(() => {
    if (sellers.length) {
      setIdSelected(sellers[0].id);
    }
  }, [sellers]);

  const confirmSale = async () => {
    const user = getUserFromLocalStorage('user');
    const checkoutList = getUserProductListToCheckout('checkoutCart');
    const totalPrice = checkoutList.reduce(
      (previousValue, currentElement) => previousValue + (
        currentElement.price * currentElement.quantity
      ),
      0,
    );
    const userId = await getUserId(user.email);
    console.log(totalPrice);
    const saleObj = {
      userId,
      sellerId: idSelected,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
      saleDate: new Date(),
      status: 'Pendente',
    };
    const id = await confirmSaleApi(saleObj, checkoutList, user.token);
    const newLocation = `/customer/orders/${id}`;
    navigate(newLocation.toString());
  };

  return (
    <div>
      <h2> Detalhes e Endereço de Entrega </h2>
      <label htmlFor="seller">
        P. Vendedora Responsável:
        <select
          id="seller"
          data-testid="customer_checkout__select-seller"
          value={ idSelected }
          onChange={ (event) => setIdSelected(event.target.value) }
        >
          { sellers && sellers.map((seller) => (
            <option
              selected={ seller.id === !!0 }
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
        onClick={ () => confirmSale() }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
