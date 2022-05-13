import styled from 'styled-components';
import { Color, Radius10 } from '../Assets/Common.style';
import EnTitle from './EnTitle';

export default function Btn({ title, type, textTag, fontSize, eventHandler }) {
  return (
    <BUTTON type={type} onClick={eventHandler}>
      <EnTitle title={title} tag={textTag} size={fontSize} />
    </BUTTON>
  );
}

const BUTTON = styled.button`
  width: 100%;
  height: 60px;
  ${Radius10}
  background: ${Color.BACKGROUND};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: ${Color.ORANGE[200]};
    > * {
      color: ${Color.WHITE};
    }
  }
`;
