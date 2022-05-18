import PropTypes from 'prop-types';
import React, { useContext, useRef, useEffect } from 'react';

import * as S from '@/components/UserLog/Userlog.style';
import { PRODUCT_ICON } from '@/constants/constants';
import { VendorContext } from '@/context/VendorProvider';

const UserLog = ({ isStock }) => {
  const {
    state: { userLog, product },
  } = useContext(VendorContext);
  const userLogRef = useRef(null);

  useEffect(() => {
    if (!userLogRef) {
      return;
    }

    userLogRef.current.scrollTop = userLogRef.current.scrollHeight;
  });

  return (
    <S.UserLogBox isStock={isStock} ref={userLogRef}>
      {isStock
        ? product.map(({ id, name, stock, category }) => (
            <S.StyledLog key={id}>{`${PRODUCT_ICON[category]} ${name} : ${stock}`}</S.StyledLog>
          ))
        : userLog.map((content, i) => <S.StyledLog key={i}>{content}</S.StyledLog>)}
    </S.UserLogBox>
  );
};

UserLog.propTypes = { isStock: PropTypes.bool };

export default UserLog;
