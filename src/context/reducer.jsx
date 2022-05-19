import dataOfwallet from "../data/wallet";

const getMoneyUnitFromWallet = (input, wallet) => {
    const differenceBetweenInputAndWalletMoney = wallet.map((money) => {
        return {
            difference: Math.abs(input - money.unit),
            ...money,
        };
    });
    const minDifference = differenceBetweenInputAndWalletMoney
        .sort((a, b) => a.difference - b.difference)
        .filter(({ count }) => count > 0);

    return minDifference.length ? minDifference[0].unit : null;
};

const getChanges = (totalMoney) => {
    const money = [10000, 5000, 1000, 500, 100, 50, 10];
    const changes = {
        10: 0,
        50: 0,
        100: 0,
        500: 0,
        1000: 0,
        5000: 0,
        10000: 0,
    };

    for (let i = 0; i < money.length; i++) {
        const moneyUnit = money[i];

        while (totalMoney >= moneyUnit) {
            changes[moneyUnit] += 1;
            totalMoney -= moneyUnit;
        }
    }

    return changes;
};

const reducer = (state, action) => {
    switch (action.type) {
        case "put": {
            const moneyUnit = getMoneyUnitFromWallet(
                action.money,
                state.wallet.money
            );

            return {
                wallet: {
                    amount: state.wallet.amount - moneyUnit,
                    money: state.wallet.money.map((m) => {
                        if (m.unit === moneyUnit) {
                            m.count -= 1;
                        }
                        return m;
                    }),
                },
                vendingMachine: {
                    amount: state.vendingMachine.amount + moneyUnit,
                },
                record: [...state.record, `${moneyUnit}원이 투입됨`],
            };
        }
        case "return": {
            const changes = getChanges(action.money);

            return {
                wallet: {
                    amount: state.wallet.amount + action.money,
                    money: state.wallet.money.map((m) => {
                        m.count += changes[m.unit];
                        return m;
                    }),
                },
                vendingMachine: {
                    amount: 0,
                },
                record: [
                    ...state.record,
                    action.money ? `잔돈 ${action.money}원 반환` : "",
                ],
            };
        }
        case "select": {
            return {
                wallet: {
                    ...state.wallet,
                },
                vendingMachine: {
                    ...state.vendingMachine,
                },
                record: [...state.record, `${action.product}이/가 선택됨`],
            };
        }
        default: {
            return state;
        }
    }
};

const initialState = {
    wallet: {
        amount: dataOfwallet.reduce(
            (acc, money) => acc + money.unit * money.count,
            0
        ),
        money: dataOfwallet,
    },
    vendingMachine: {
        amount: 0,
    },
    record: [],
};

export { reducer, initialState };
