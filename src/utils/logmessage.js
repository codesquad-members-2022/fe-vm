const logMessage = type => {
  switch (type) {
    case 'INSERT':
      return ' 투입되었습니다.';
    case 'BUY':
      return '을(를) 구매하였습니다.';
    case 'DROP':
      return '이(가) 배출되었습니다.';
    case 'RETURN':
      return ' 반환되었습니다.';
    default:
      throw new Error();
  }
};

export default logMessage;
