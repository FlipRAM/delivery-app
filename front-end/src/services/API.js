import * as axios from 'axios';

const USERS_ROUTE_MAIN = 'http://localhost:3001/users';

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
    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const listProductsApi = async () => {
  try {
    const result = await axios('http://localhost:3001/products/customer');
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
  try {
    const { data: { id } } = await axios.post(('http://localhost:3001/sales/customer'), {
      saleObj,
      products,
    }, {
      headers: {
        Authorization: token,
      },
    });

    return id;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const getSaleById = async (id) => {
  try {
    const { data } = await axios.get((`http://localhost:3001/sales/${id}`));
    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const listSalesWithFullInfoApi = async (id) => {
  try {
    const { data } = await axios(`http://localhost:3001/sales/customer/${id}`);

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const updateStatusOrderApi = async (id, status) => {
  try {
    const data = await axios.put((`http://localhost:3001/sales/${id}`), {
      status,
    });

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const saveNewUserApi = async (userDTO, token) => {
  try {
    const result = await axios.post((USERS_ROUTE_MAIN), {
      ...userDTO,
    }, {
      headers: {
        Authorization: token,
      },
    });

    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const removeUserApi = async (id, token) => {
  try {
    const result = await axios.delete(`http://localhost:3001/users/${id}`, { data: { token } });
    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const getAllSalesOfPerson = async (id) => {
  try {
    const data = await axios.get(`http://localhost:3001/sales/customer/${id}/orders`);

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const getUserListApi = async (token) => {
  try {
    const result = await axios.get((USERS_ROUTE_MAIN), {
      headers: {
        Authorization: token,
      },
    });

    return result;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const confirmUser = async (token) => {
  try {
    const data = await axios.post('http://localhost:3001/users/verify', {}, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const getSellerOrdersApi = async (id) => {
  try {
    const data = await axios(`http://localhost:3001/sales/seller/${id}/orders`);

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};
