import { useState, useReducer, createContext, useContext } from "react";

const LogContext = createContext();

const logclassifier = (state, action) => {
    switch (action.type) {
        case "INSERT_COIN":
            return (
                <LogContextBox>
                    {state.text.toString()}원이 투입되었습니다.
                </LogContextBox>
            );
        case "CHOOSE_DRINK":
            return (
                <LogContextBox>
                    {state.text.toString()}가 선택되었습니다.
                </LogContextBox>
            );
        default:
            return new Error();
    }
};

function LogComponent() {
    const [log, dispatch] = useReducer(logclassifier, userInput);

    return <LogContext.Provider value={log}></LogContext.Provider>;
}
