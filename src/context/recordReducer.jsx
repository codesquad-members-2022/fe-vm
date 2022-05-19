const recordReducer = (state, action) => {
    switch (action.type) {
        case "put": {
            return [...state, `${action.money}원이 투입됨`];
        }
        case "return": {
            return [
                ...state,
                action.money ? `잔돈 ${action.money}원 반환` : "",
            ];
        }
        case "select": {
            return [...state, `${action.product}이/가 선택됨`];
        }
        default: {
            return state;
        }
    }
};

export default recordReducer;
