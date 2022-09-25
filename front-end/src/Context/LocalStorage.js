export const saveUserOnLocalStorage = (key, data) => localStorage
  .setItem(key, JSON.stringify(data));

export const getUserFromLocalStorage = (key) => JSON
  .parse(localStorage.getItem(key));

export const saveUserProductListToCheckout = (key, data) => localStorage
  .setItem(key, JSON.stringify(data));

export const getUserProductListToCheckout = (key) => JSON
  .parse(localStorage.getItem(key));
