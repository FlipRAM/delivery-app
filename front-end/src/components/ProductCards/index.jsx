import React, { useContext, useEffect, useState } from 'react';
import { useAppContext } from '../../Context/APIProvider';
import { Cards, ProductCardsContainer } from './styles';
import { listProductsApi } from '../../services/API';

export default function ProductCards() {
  const [quantity, setQuantity] = useState(0);
  const { productsList, setProductsList } = useContext(useAppContext);

  useEffect(() => {
    (async () => {
      if (!productsList) {
        const data = await listProductsApi();
        setProductsList(data.data);
      }
    })();
  }, [productsList, setProductsList]);

  return (
    <ProductCardsContainer>
      { productsList && productsList.map((product) => (
        <Cards key={ product.id }>
          <p
            data-testid={ `customer_products__element-card-price-${product.id}` }
            className="price"
          >
            {product.price}

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
                data-testid={ `customer_products__button-card-rm-item-${product.id}` }
                onClick={ () => setQuantity(quantity - 1) }
                className="minus"
                type="button"
              >
                -
              </button>
              <input
                data-testid={ `customer_products__input-card-quantity-${product.id}` }
              />
              <button
                data-testid={ `customer_products__button-card-add-item-${product.id}` }
                onClick={ () => setQuantity(quantity + 1) }
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
        data-testid="customer_products__checkout-bottom-value"
        type="button"
        className="checkout"
      >
        Ver Carrinho
      </button>
    </ProductCardsContainer>
  );
}
