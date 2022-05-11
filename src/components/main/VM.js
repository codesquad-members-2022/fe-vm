import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Box_Shadow, Border } from '../../Assets/CommonStyle';
import { useNavigate } from 'react-router-dom';

export default function VendingMachine({ isClicked }) {
  const [isStoreBtnClick, setStoreBtnClick] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleStoreBtn = () => {
    setStoreBtnClick(!isStoreBtnClick);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (inputRef.current.value === '5412') {
      navigate('/store');
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  useEffect(() => {
    if (isStoreBtnClick) inputRef.current.focus();
  }, [isStoreBtnClick]);

  return (
    <>
      {isClicked ? (
        <StyledVM>
          <VMHeader>
            <span>작동중!</span>
            <h2>Code Squad 자판기</h2>
            {isStoreBtnClick ? (
              <StyledLoginForm onSubmit={handleLogin}>
                <StyledPassWordInput
                  ref={inputRef}
                  type="password"
                  maxLength="4"
                  title="4자리 숫자를 입력해주세요"
                  pattern="[0-9]+"
                />
                <SubmitBtn>Log in</SubmitBtn>
              </StyledLoginForm>
            ) : (
              <StoreBtn onClick={handleStoreBtn}>재고 관리</StoreBtn>
            )}
          </VMHeader>
        </StyledVM>
      ) : null}
    </>
  );
}

const StyledVM = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 600px;
  ${Border}
  border-radius: 10px;
  ${Box_Shadow}
  margin-right: 10px;
`;

const VMHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const StoreBtn = styled.button`
  width: 100px;
  height: 30px;
  ${Border}
  border-radius: 5px;
  cursor: pointer;
`;

const StyledLoginForm = styled.form`
  width: 120px;
`;

const SubmitBtn = styled.button`
  ${Border}
  border-radius: 5px;
  font-size: 11px;
  margin-left: 5px;
  width: 45px;
  height: 25px;
`;

const StyledPassWordInput = styled.input`
  width: 60px;
  height: 22px;
  ${Border}
  border-radius: 5px;
  &:focus {
    outline: none;
    color: gray;
  }
`;
