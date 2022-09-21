const axios = require('axios');

const postLoginApi = async (data) => {
  const customAlert = alert;
  try {
    const result = await axios.post(('http://localhost:3001/login'), {
      ...data,
    });

    // customAlert('Login autorizado');
    // return { hasToken: false, method: 'POST', status: err.response.status };
    return result;
  } catch (err) {
    // console.log(err.response.status);
    customAlert('Erro inesperado, ou as informações estão incorretas');
    return { hasToken: false, method: 'POST', status: err.response.status };
  }
};

const postRegisterApi = async (data) => {
  try {
    const result = await axios.post(('http://localhost:3001/register'), {
      ...data,
    });
    return { hasToken: false, method: 'POST', status: result.status };
  } catch (AxiosError) {
    return { hasToken: false, method: 'POST', status: AxiosError.response.status };
  }
};

module.exports = { postLoginApi, postRegisterApi };
