const axios = require('axios');

const postLoginApi = async (data) => {
  const customAlert = alert;
  try {
    await axios.post(('http://localhost:3001/login'), {
      ...data,
    });

    // customAlert('Login autorizado');
    return { hasToken: false, method: 'POST', status: err.response.status };
  } catch (err) {
    // console.log(err.response.status);
    customAlert('Erro inesperado, ou as informações estão incorretas');
    return { hasToken: false, method: 'POST', status: err.response.status };
  }
};

module.exports = postLoginApi;
