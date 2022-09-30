import * as axios from 'axios';

const SALES = 'http://localhost:3001/users';

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
    const { data } = await axios('/sellers');

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const confirmSaleApi = async (saleObj, products, token) => {
  try {
    const { data: { id } } = await axios.post(('http://localhost:3001/customer/sales'), {
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
    const { data } = await axios(`http://localhost:3001/customer/sales/${id}`);

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const updateStatusOrderApi = async (id, status) => {
  try {
    const { data } = await axios.put((`http://localhost:3001/sales/${id}`), {
      status,
    });

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const saveNewUserApi = async (userDTO, token) => {
  try {
    const result = await axios.post((SALES), {
      ...userDTO,
    }, {
      headers: {
        Authorization: token,
      },
    });

    console.log(AxiosError);
    return result.data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const getAllSalesOfPerson = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/customer/${id}/orders`);

    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const getUserListApi = async (token) => {
  try {
    const result = await axios.get((SALES), {
      headers: {
        Authorization: token,
      },
    });

    return result.data;
  } catch (AxiosError) {
    return AxiosError;
  }
};

export const confirmUser = async (token) => {
  const correctStatus = 200;
  const { status } = await axios.post('http://localhost:3001/users/verify', {}, {
    headers: {
      Authorization: token,
    },
  });
  if (status === correctStatus) return true;
};

export const getSellerOrdersApi = async (id) => {
  try {
    const { data } = await axios(`http://localhost:3001/seller/${id}/orders`);
    console.log(data);
    return data;
  } catch (AxiosError) {
    return AxiosError;
  }
};
