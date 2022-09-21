const emailValidate = (email) => email
  .match(/^\w+([-+.’]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);

export default emailValidate;
