import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function NotFound() {
  let navigate = useNavigate();

  const moveBackPage = () => {
    navigate(-1);
  };

  const moveMachinePage = () => {
    navigate('/');
  };

  return (
    <NotFoundContainer>
      <Message>⛔️ 유효하지 않은 페이지입니다! ⛔️</Message>
      <BtnWrapper>
        <PageMoveBtn onClick={moveBackPage}>🔙 뒤로가기</PageMoveBtn>
        <span>또는</span>
        <PageMoveBtn onClick={moveMachinePage}>🧃 자판기로 가기</PageMoveBtn>
      </BtnWrapper>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 64px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  text-align: center;
`;

const Message = styled.p`
  margin-bottom: 40px;
  ${({ theme }) => theme.fontStyles.display};
`;

const BtnWrapper = styled.div`
  span {
    padding: 8px;
    ${({ theme }) => theme.fontStyles.smallRegular};
  }
`;

const PageMoveBtn = styled.button`
  ${({ theme }) => theme.fontStyles.xLargeBold};

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
    transition: all 0.4s ease-in-out;
  }
`;
