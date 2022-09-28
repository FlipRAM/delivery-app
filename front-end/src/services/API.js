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

export const listSellerOrdersApi = async () => {
  try {
    const result = await axios('http://localhost:3001/sales');
    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const listUserApi = async () => {
  try {
    const result = await axios('http://localhost:3001/users');
    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const listSalesProductsApi = async () => {
  try {
    const result = await axios('http://localhost:3001/salesproducts');
    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};
