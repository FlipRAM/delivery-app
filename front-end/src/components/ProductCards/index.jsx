import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../Context/APIProvider';
import {
  getUserProductListToCheckout,
  saveUserProductListToCheckout,
} from '../../Context/LocalStorage';
import { listProductsApi } from '../../services/API';
import { Cards, ProductCardsContainer } from './styles';

export default function ProductCards() {
  const { productsList, setProductsList } = useContext(useAppContext);
  const [totalPrice, setTotalPrice] = useState('0,00');
  const [productListToCheckout, setProductListToCheckout] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!productsList) {
        const { data } = await listProductsApi();
        setProductsList(data);
      }
    })();
  }, [productsList, setProductsList]);

  useEffect(() => {
    if (getUserProductListToCheckout('cart')) {
      setProductListToCheckout(getUserProductListToCheckout('cart'));
    } else if (productsList) {
      setProductListToCheckout(productsList.map((product) => ({
        quantity: 0,
        ...product,
      })));
    }
  }, [productsList]);

  useEffect(() => {
    console.log();
    if (Number(totalPrice.replace(',', '.')) > 0) {
      saveUserProductListToCheckout('cart', productListToCheckout);
    }
  }, [productListToCheckout, totalPrice]);

  useEffect(() => {
    setTotalPrice(productListToCheckout
      .reduce((acc, product) => acc + (product.price * product.quantity), 0)
      .toFixed(2).toString().replace('.', ','));
  }, [productListToCheckout]);

  const handleProductQuantityByInput = (event) => {
    setProductListToCheckout(productListToCheckout.map((product) => {
      if (product.id !== Number(event.target.id) || Number(event.target.value) < 0) {
        return product;
      }
      return { ...product, quantity: Number(event.target.value) };
    }));
  };

  const handleAddQuantity = (event) => {
    setProductListToCheckout((prev) => prev
      .map((product) => {
        if (product.id === Number(event.target.id) && product.quantity < 100) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      }));
  };

  const handleRmQuantity = (event) => {
    setProductListToCheckout((prev) => prev
      .map((product) => {
        if (product.id === Number(event.target.id) && product.quantity > 0) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      }));
  };

  return (
    <ProductCardsContainer>
      { productListToCheckout && productListToCheckout.map((product) => (
        <Cards key={ product.id }>
          <p
            data-testid={ `customer_products__element-card-price-${product.id}` }
            className="price"
          >
            {`R$ ${product.price.replace('.', ',')}`}
          </p>

          <img
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            className="thumb"
            src={ product.urlImage }
            alt={ `${product.urlImage}imagem` }
          />

          <div className="infoOptions">
            <p
              data-testid={ `customer_products__element-card-title-${product.id}` }
              className="product-name"
            >
              {product.name}
            </p>

            <div className="quantity">
              <button
                onClick={ handleRmQuantity }
                id={ product.id }
                data-testid={ `customer_products__button-card-rm-item-${product.id}` }
                className="minus"
                type="button"
              >
                -
              </button>
              <input
                id={ product.id }
                onChange={ handleProductQuantityByInput }
                value={ product.quantity }
                type="number"
                min="0"
                max="500"
                required
                data-testid={ `customer_products__input-card-quantity-${product.id}` }
              />
              <button
                onClick={ handleAddQuantity }
                id={ product.id }
                data-testid={ `customer_products__button-card-add-item-${product.id}` }
                className="plus"
                type="button"
              >
                +
              </button>
            </div>
          </div>
        </Cards>
      ))}
      <button
        onClick={ () => navigate('/customer/checkout') }
        disabled={ Number(totalPrice.replace(',', '.')) < 1 }
        data-testid="customer_products__button-cart"
        type="button"
        className="checkout"
      >
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {`Ver Carrinho: R$ ${totalPrice}`}
        </span>
      </button>
    </ProductCardsContainer>
  );
}
