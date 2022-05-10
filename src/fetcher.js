export const fetchData = async (target) => {
  return await (await fetch(getRequestURL(target))).json();
};

const getRequestURL = (target) => {
  return `http://localhost:3000/mocks/${target}.json`;
};
