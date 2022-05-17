export async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response) {
      throw new Error('api failed');
    }

    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export const getData = async (url, setData) => {
  const response = await fetchData(url);

  setData(response.data);
};

export const changeKoreanLocalMoney = (number) =>
  `${Number(number).toLocaleString('ko-KR')}`;

export const changeStrMoneyToNumMoney = (strMoney) =>
  strMoney.split(',').join('');
