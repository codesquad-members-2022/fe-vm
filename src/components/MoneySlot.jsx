function MoneySlot({ addRecord, wallet }) {
    const putMoney = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const money = event.target.value;
            wallet[money] -= 1;
            addRecord(`${money}원이 투입됨`);
            event.target.value = "";
        }
    };

    return (
        <form>
            <input
                type="number"
                min="10"
                max="10000"
                onKeyDown={putMoney}
                placeholder="0"
            ></input>
            <span>원</span>
        </form>
    );
}

export default MoneySlot;
