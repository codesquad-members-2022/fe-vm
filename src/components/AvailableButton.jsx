import styled from 'styled-components';
import Button from './Button';

const AvailableButton = styled(Button)`
  background-color: #f8f5f5;
  :hover {
    filter: brightness(70%);
  }
  border: ${({ isAvailabe }) => (isAvailabe ? '3px solid red' : 'none')};
`;

export default AvailableButton;
