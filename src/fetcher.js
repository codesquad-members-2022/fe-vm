const port = process.env.PORT || 3001;
const baseURL = `http://localhost:${port}/`;

export const request = {
  async getData(target) {
    const URL = makeURL(target);
    const data = await (await fetch(URL)).json();
    return data;
  },

  async putData(target, id, requestBody) {
    const URL = makeURL(target, id);
    const makeRequestMessage = makeRequestMessage("PUT", requestBody);
    fetch(URL, makeRequestMessage);
  }
};

const makeURL = (target, id = "") => {
  return `${baseURL}${target}${id}`;
};

const makeRequestMessage = (method, requestBody) => {
  return {
    method: method,
    body: JSON.stringify(requestBody),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  };
};
