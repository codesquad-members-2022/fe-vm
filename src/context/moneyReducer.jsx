import dataOfwallet from "../data/wallet";

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

const moneyReducer = (state, action) => {
    switch (action.type) {
        case "put": {
            return {
                wallet: {
                    amount: state.wallet.amount - action.money,
                    moneyArray: state.wallet.moneyArray.map((m) => {
                        if (m.unit === action.money) {
                            m.count -= 1;
                        }
                        return m;
                    }),
                },
                vendingMachine: {
                    amount: state.vendingMachine.amount + action.money,
                },
            };
        }
        case "return": {
            const changes = getChanges(action.money);

            return {
                wallet: {
                    amount: state.wallet.amount + action.money,
                    moneyArray: state.wallet.moneyArray.map((m) => {
                        m.count += changes[m.unit];
                        return m;
                    }),
                },
                vendingMachine: {
                    amount: 0,
                },
            };
        }
        default: {
            return state;
        }
    }
};

const initialStateOfMoney = {
    wallet: {
        amount: dataOfwallet.reduce(
            (acc, money) => acc + money.unit * money.count,
            0
        ),
        moneyArray: dataOfwallet,
    },
    vendingMachine: {
        amount: 0,
    },
};

export { moneyReducer, initialStateOfMoney };
