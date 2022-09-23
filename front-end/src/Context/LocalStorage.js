export const saveUserOnLocalStorage = (data) => localStorage
  .setItem('user', JSON.stringify(data));

export const getUserFromLocalStorage = () => JSON
  .parse(localStorage.getItem('user'));
