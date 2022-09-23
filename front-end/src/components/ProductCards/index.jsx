import React, { useContext, useEffect } from 'react';
import { useAppContext } from '../../Context/APIProvider';
import { listProductsApi } from '../../services/API';
import { Cards, ProductCardsContainer } from './styles';

export default function ProductCards() {
  const { productsList, setProductsList } = useContext(useAppContext);

  useEffect(() => {
    (async () => {
      if (!productsList) {
        const { data } = await listProductsApi();
        setProductsList(data);
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
                data-testid={ `customer_products__button-card-rm-item-${product.id}` }
                className="minus"
                type="button"
              >
                -
              </button>
              <input
                defaultValue={ 0 }
                type="number"
                data-testid={ `customer_products__input-card-quantity-${product.id}` }
              />
              <button
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
        data-testid="customer_products__checkout-bottom-value"
        type="button"
        className="checkout"
      >
        Ver Carrinho: R$ 845,45
      </button>
    </ProductCardsContainer>
  );
}
