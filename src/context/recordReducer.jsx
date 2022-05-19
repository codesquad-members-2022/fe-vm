import ACTION_TYPE from "./actionType";

const recordReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.PUT: {
            return [...state, `${action.money}원이 투입됨`];
        }
        case ACTION_TYPE.RETURN: {
            return [
                ...state,
                action.money ? `잔돈 ${action.money}원 반환` : "",
            ];
        }
        case ACTION_TYPE.SELECT: {
            return [...state, `${action.product}이/가 선택됨`];
        }
        default: {
            return state;
        }
    }
};

export default recordReducer;
