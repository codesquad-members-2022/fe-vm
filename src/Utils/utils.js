import { MessageType } from './constants';

export function replaceNotNumToSpace(num) {
  return String(num).replace(/[^0-9]|,/g, ''); // 숫자 아닐때 공백처리
}

export function changeNumToLocalMoney(num) {
  return Number(num).toLocaleString('ko-KR');
}

export function getMessage(type, value) {
  let valueMessage = '';
  const TYPE_MESSAGE = `${type}했습니다.`;
  switch (type) {
    case MessageType.ADD:
    case MessageType.RETURN:
      valueMessage = `${value}원을 `;
      break;
    case MessageType.BUY:
      valueMessage = `상품(${value})을 `;
      break;
    case MessageType.NOT_PAY_MONEY:
      return '금액을 입력해주세요';
    case MessageType.NO_MONEY:
      return '지갑에 돈이 없습니다..';
    default:
      throw new Error('message type error');
  }

  return `${valueMessage + TYPE_MESSAGE}`;
}
