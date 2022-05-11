import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ChangesUnits from 'pages/VMmangement/ChangesUnits';

const TOTAL_BALANCE = 23500;

const CHANGES_UMITS = [
  { id: 10, unit: 10, count: 0 },
  { id: 500, unit: 500, count: 0 },
  { id: 50, unit: 50, count: 0 },
  { id: 100, unit: 100, count: 0 },
  { id: 5000, unit: 5000, count: 0 },
  { id: 1000, unit: 1000, count: 0 },
  { id: 10000, unit: 10000, count: 0 },
];

const getRestUnit = (units, totalBalance) => {
  const { resultArr: newChangesUnits } = [...units]
    .sort((prev, cur) => cur.unit - prev.unit)
    .reduce(
      ({ rest, resultArr }, cur) => {
        const taretCount = Math.floor(rest / cur.unit);
        const newRest = rest % cur.unit;
        return { rest: newRest, resultArr: [{ ...cur, count: taretCount }, ...resultArr] };
      },
      { rest: totalBalance, resultArr: [] },
    );
  return newChangesUnits;
};

function VMmangement(props) {
  const [totalBalance, setTotalBalance] = useState(TOTAL_BALANCE);
  const [changesUnits, setChangesUnits] = useState(CHANGES_UMITS);
  const substactBalance = useCallback(money => {
    setTotalBalance(prev => prev - money);
  }, []);

  const divideBalance = useCallback(() => {
    setChangesUnits(prev => getRestUnit(prev, totalBalance));
  }, [totalBalance]);

  useEffect(() => {
    divideBalance();
  }, [divideBalance]);

  return (
    <ChangesUnits
      totalBalance={totalBalance}
      changesUnits={changesUnits}
      substactBalance={substactBalance}
    />
  );
}

VMmangement.propTypes = {};

export default VMmangement;
