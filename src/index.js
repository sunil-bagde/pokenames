import pokeName from "./pokename.json";

export const random = () => {
  return pokeName[randomInteger(0, pokeName.length)];
};

export const randomInteger = (minimum, maximum) => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

export default {
  pokeName,
  random,
};
