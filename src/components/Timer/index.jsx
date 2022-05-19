import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import * as S from '@/components/Timer/Timer.style';

const Timer = ({ isInsertedCash }) => {
  const INITIAL_MINUTE = 0;
  const INITIAL_SECOND = 5;
  const [minutes, setMinutes] = useState(INITIAL_MINUTE);
  const [seconds, setSeconds] = useState(INITIAL_SECOND);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <S.TimerBox isInsertedCash={isInsertedCash}>
      <S.TimerCount>
        {minutes}:{seconds?.toString().padStart(2, '0')}
      </S.TimerCount>
    </S.TimerBox>
  );
};

Timer.propTypes = {
  isInsertedCash: PropTypes.bool,
};

export default Timer;
