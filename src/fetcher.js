const port = process.env.PORT || 3001;
const baseURL = `https://alan-vm.herokuapp.com`;

export const request = {
  async getData(target) {
    const URL = makeURL(target);
    const data = await (await fetch(URL)).json();
    return data;
  },

  async patchData(target, id, requestBody) {
    const URL = makeURL(target, id);
    const requestMessage = makeRequestMessage("PATCH", requestBody);
    fetch(URL, requestMessage);
  },
};

const makeURL = (target, id = "") => {
  return `${baseURL}/${target}/${id}`;
};

const makeRequestMessage = (method, requestBody) => {
  return {
    method: method,
    body: JSON.stringify(requestBody),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };
};
