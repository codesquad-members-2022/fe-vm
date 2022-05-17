import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

instance.interceptors.request.use(
  (config) => {
    // 요청 성공 직전
    // axios 설정값을 넣습니다.
    return config;
  },
  (error) => {
    // 요청 에러 직전
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    /*
        http status가 200인 경우
        응답 성공 직전 호출됩니다. 
        .then() 으로 이어집니다.
    */
    return response;
  },
  (error) => {
    // 요청 에러 직전
    return Promise.reject(error);
  }
);

export default instance;
