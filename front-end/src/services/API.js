import * as axios from 'axios';

export const postLoginApi = async (data) => {
  try {
    const result = await axios.post(('http://localhost:3001/login'), {
      ...data,
    });

    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const postRegisterApi = async (data) => {
  try {
    const result = await axios.post(('http://localhost:3001/register'), {
      ...data,
    });
    return { hasToken: false, method: 'POST', status: result.status };
  } catch (AxiosError) {
    return { hasToken: false, method: 'POST', status: AxiosError.response.status };
  }
};

export const listProductsApi = async () => {
  try {
    const result = await axios('http://localhost:3001/customer/products');
    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const listSellersApi = async () => {
  try {
    const { data } = await axios('http://localhost:3001/users/sellers');

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const confirmSaleApi = async (saleObj, products, token) => {
  console.log(saleObj, products, token);
  try {
    const { data: { id } } = await axios.post(('http://localhost:3001/customer/sales'), {
      saleObj,
      products,
    }, {
      headers: {
        Authorization: token,
      },
    });
    console.log(id);

    return id;
  } catch (AxiosError) {
    return AxiosError;
  }
};

// ------
export const listSalesApi = async () => {
  try {
    const { data } = await axios('http://localhost:3001/customer/sales');

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const listSalesProductsApi = async () => {
  try {
    const { data } = await axios('http://localhost:3001/salesProducts');

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};
