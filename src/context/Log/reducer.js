import { ADD_LOG } from 'context/Log/action';

const addLog = (state, payload) => {
  const { logList } = state;
  const { logType, contents } = payload;
  logList.push({ id: logList.length + 1, message: createLogMessage(logType, contents) });
  return { logList: logList };
};

function createLogMessage(logType, contents = null) {
  return {
    input: `${contents}원을 투입했습니다!`,
    output: `${contents}원이 반환되었습니다!`,
    select: `${contents}(이/가) 선택되었습니다!`,
    error: `잔액이 부족합니다!`,
  }[logType];
}

const actionFunc = {
  [ADD_LOG]: addLog,
};

const reducer = (state, { type, payload }) => actionFunc[type](state, payload) || state;

export default reducer;
