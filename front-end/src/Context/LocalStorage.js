export const saveUserOnLocalStorage = (key, data) => localStorage
  .setItem(key, JSON.stringify(data));

export const getUserFromLocalStorage = (key) => JSON
  .parse(localStorage.getItem(key));
