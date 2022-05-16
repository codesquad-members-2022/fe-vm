import { v4 as uuid } from "uuid";

const dataOfwallet = [
    { unit: 10, count: 3 },
    { unit: 50, count: 3 },
    { unit: 100, count: 3 },
    { unit: 500, count: 3 },
    { unit: 1000, count: 3 },
    { unit: 5000, count: 3 },
    { unit: 10000, count: 3 },
].map((moneyUnit) => ({ ...moneyUnit, id: uuid() }));

export default dataOfwallet;
