import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from 'constant/route';
import { Button } from '@mui/material';

function NotFound(props) {
  const navigate = useNavigate();
  const backToMain = () => {
    navigate(ROUTE.HOME);
  };
  return (
    <div>
      NotFound
      <Button variant="contained" onClick={backToMain}>
        홈으로 돌아가기
      </Button>
    </div>
  );
}

export default NotFound;
