export const getLocalStorage = (key) => {
  const storage = localStorage.getItem(key);
  return JSON.parse(storage);
};

export const updateLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const deleteLocalStorage = (key) => {
  localStorage.removeItem(key);
};