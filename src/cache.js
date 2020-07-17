const cache = {};

export const setCache = (key, value) => {
  cache[key] = value;
};

export const getCache = (key) => {
  return cache[key];
};