import React, { useContext, useEffect, useState } from 'react';
import { useAppContext } from '../../Context/APIProvider';

export default function CheckoutProducts() {
  const { checkoutList, setCheckoutList } = useContext(useAppContext);
  const { totalPrice, setTotalPrice } = useState(0);

  const removeItem = (product) => {
    const indexMatch = checkoutList.indexOf(product);
    const newCheckoutList = checkoutList.splice(indexMatch, 1);
    setCheckoutList(newCheckoutList);
  };

  useEffect(() => {
    (async () => {
      if (checkoutList) {
        const price = checkoutList.reduce(
          (previousValue, currentElement) => previousValue + currentElement.price,
          0,
        );
        setTotalPrice(price);
      }
    })();
  }, [checkoutList, setCheckoutList]);

  return (
    <div>
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
                {product.qnty}
              </p>
              <p
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {product.price}
              </p>
              <p
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {product.price * product.qnty}
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
      <p
        data-testid="customer_checkout__element-order-total-price"
      >
        { `Total: R$ ${totalPrice}` }
      </p>
    </div>
  );
}
