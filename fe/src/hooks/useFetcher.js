import { useEffect, useState } from 'react';

const useFetcher = axiosInstance => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trigger, setTrigger] = useState(0);

  const refresh = () => setTrigger(Date.now());

  const fetcher = async ({ paramObj, submitData }) => {
    setLoading(true);
    try {
      const response = await axiosInstance(paramObj, submitData);
      setData(response.data);
      console.log(response);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return [error, loading, fetcher];
};

export default useFetcher;
