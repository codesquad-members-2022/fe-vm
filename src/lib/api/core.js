import axios from 'axios';

import { BASE_URL } from '@constants';

const instance = axios.create({
  baseURL: BASE_URL,
});

const getData = async url =>
  await instance
    .get(url)
    .then(res => res.data)
    .catch(err => {
      if (err.response) {
        console.log(err.response.data.message);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log('Error', err.message);
      }
    });

const patchData = async ({ url, data }) =>
  await instance
    .patch(url, data)
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => {
      if (err.response) {
        console.log(err.response.data.message);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log('Error', err.message);
      }
    });

export { getData, patchData };
