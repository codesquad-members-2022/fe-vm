import { useEffect } from 'react';

export default function App(): JSX.Element {
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/test')
        .then(response => response.json())
        .then(data => console.log(data));
    };
    fetchData();
  }, []);

  return <></>;
}
