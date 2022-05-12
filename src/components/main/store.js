import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import {
  Max_width,
  Flex_Center,
  Border,
  Box_Shadow,
} from '../../Assets/CommonStyle';

export function Store() {
  const navigate = useNavigate();
  const backToVM = () => {
    navigate('/');
  };

  return (
    <StyledMain>
      <StyledStore>
        재고 관리
        <button onClick={backToVM}>완료</button>
      </StyledStore>
    </StyledMain>
  );
}

const StyledStore = styled.div`
  ${Flex_Center}
  width: 600px;
  height: 600px;
  ${Border}
  border-radius: 10px;
  ${Box_Shadow}
  margin-top: 100px;
  margin-right: 10px;
`;

const StyledMain = styled.div`
  ${Max_width}
  ${Flex_Center}
  margin : 0 auto;
`;
