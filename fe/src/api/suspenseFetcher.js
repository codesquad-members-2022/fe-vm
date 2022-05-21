export default function suspenseFetcher({ axiosInstance, params, option }) {
  let status = 'loading';
  let resource = null;
  const suspender = axiosInstance(params, option).then(
    response => {
      status = 'success';
      resource = response.data;
    },
    error => {
      status = 'error';
      resource = error;
    },
  );
  return {
    read() {
      switch (status) {
        case 'loading':
          throw suspender;
        case 'success':
          return resource;
        case 'error':
          throw resource;
        default:
          throw suspender;
      }
    },
  };
}
