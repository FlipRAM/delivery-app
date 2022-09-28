import React, { useEffect, useState } from 'react';
import {
  saveUserProductListToCheckout,
  getUserProductListToCheckout,
} from '../../Context/LocalStorage';
import CheckoutContainer from './styles';

export default function CheckoutProducts() {
  const [checkoutList, setCheckoutList] = useState([]);
  const [totalPrice, setTotalPrice] = useState();

  const removeItem = (product) => {
    const indexMatch = checkoutList.indexOf(product);
    const newCheckoutList = [...checkoutList];
    newCheckoutList.splice(indexMatch, 1);
    setCheckoutList(newCheckoutList);
  };

  useEffect(() => {
    const localStorageProductList = getUserProductListToCheckout('cart');
    const validProducts = localStorageProductList.filter(
      (product) => product.quantity >= 1,
    );
    setCheckoutList(validProducts);
  }, []);

  useEffect(() => {
    (async () => {
      if (checkoutList) {
        const price = checkoutList.reduce(
          (previousValue, currentElement) => previousValue + (
            currentElement.price * currentElement.quantity
          ),
          0,
        );
        setTotalPrice(price);
        saveUserProductListToCheckout('checkoutCart', checkoutList);
      }
    })();
  }, [checkoutList, setCheckoutList]);

  return (
    <CheckoutContainer>
      { checkoutList && checkoutList.map((product, index) => (
        <div key={ product.id }>
          <p
            data-testid={
              `customer_checkout__element-order-table-item-number-${index}`
            }
            className="price"
          >
            {`${index + 1}`}
          </p>

          <div className="infoOptions">
            <p
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
              className="product-name"
            >
              {product.name}
            </p>

            <div className="quantity">
              <p
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                {product.quantity}
              </p>
              <p
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {product.price.replace('.', ',')}
              </p>
              <p
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {parseFloat(product.price * product.quantity)
                  .toFixed(2).replace('.', ',')}
              </p>
              <button
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                }
                type="button"
                onClick={ () => removeItem(product) }
              >
                Remover
              </button>
            </div>
          </div>
        </div>
      ))}
      <p>
        Total: R$
        <span data-testid="customer_checkout__element-order-total-price">
          {`${parseFloat(totalPrice).toFixed(2).replace('.', ',')}`}
        </span>
      </p>
    </CheckoutContainer>
  );
}
