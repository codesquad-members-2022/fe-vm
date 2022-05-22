import axios from 'axios';
import getMockData from 'mock';

const baseURL = 'http://localhost:3005';

const instance = axios.create({
  baseURL: baseURL,
  timeout: 2000,
});

const getData = async pathName => {
  try {
    const { data } = await instance.get(pathName);
    return data;
  } catch (error) {
    console.log('Axios Error : ', error);
    throw new Error(error);
  }
};

export { getData };
