export const fetchData = async url => {
  const fetchedData = await fetch(url);
  const parsedData = fetchedData.json();
  return parsedData;
};
