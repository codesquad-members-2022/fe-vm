import { fetchData } from 'Helper/utils';
const { useEffect, useState } = require('react');

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(url);
      setData(data);
    };
    getData();
  }, [url]);
  return [data, setData];
}
