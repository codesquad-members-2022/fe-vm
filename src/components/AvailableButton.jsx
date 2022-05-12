import styled from 'styled-components';
import Button from './Button';

const AvailableButton = styled(Button)`
  &:not(:disabled) {
    &:hover {
      filter: brightness(70%);
    }
    background-color: #f8f5f5;
    border: ${({ isAvailabe }) => (isAvailabe ? '3px solid red' : 'none')};
  }
`;

export default AvailableButton;
