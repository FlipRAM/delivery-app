const { loginService } = require('../services/loginServices')

const loginController = async (request, response) => {
  const {body} = request;
  
  const user = await loginService(body)
  response.status(200).json(user)
}

module.exports = { loginController }