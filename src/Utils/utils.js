export function changeNumToLocalMoney(num) {
  return Number(num).toLocaleString('ko-KR');
}

export function getMessage(type, value) {
  let valueMessage = '';
  const TYPE_MESSAGE = `${type}했습니다.`;
  switch (type) {
    case '투입':
    case '반환':
      valueMessage = `${value}원을 `;
      break;
    case '구입':
      valueMessage = `상품${value}을 `;
      break;
    default:
      return;
  }

  return `${valueMessage + TYPE_MESSAGE}`;
}
