import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from 'constant/route';
import { Button } from '@mui/material';

function NotAllow({ warnMessage }) {
  const navigate = useNavigate();
  const backToMain = () => {
    navigate(ROUTE.HOME);
  };
  return (
    <div>
      NotAllow
      <h1>{warnMessage}</h1>
      <Button variant="contained" onClick={backToMain}>
        홈으로 돌아가기
      </Button>
    </div>
  );
}

NotAllow.propTypes = {
  warnMessage: PropTypes.string.isRequired,
};

export default NotAllow;
