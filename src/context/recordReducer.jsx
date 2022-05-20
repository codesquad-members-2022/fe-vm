import { ACTION_TYPE } from "../constants";

const recordReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.PUT: {
            return [...state, `${action.payload.money}원이 투입됨`];
        }
        case ACTION_TYPE.RETURN: {
            return [
                ...state,
                action.payload.money
                    ? `잔돈 ${action.payload.money}원 반환`
                    : "",
            ];
        }
        case ACTION_TYPE.SELECT: {
            return [...state, `${action.payload.product}이/가 선택됨`];
        }
        default: {
            return state;
        }
    }
};

export default recordReducer;
