import styled from 'styled-components';
import { Color, FontSize, Radius10 } from '../../Assets/Common.style';
import EnTitle from '../EnTitle';

export default function MessageBox({ message }) {
  const printMessages = message.map((msg, idx) => {
    return <p key={idx}>{msg}</p>;
  });

  return (
    <MassegeContent>
      <EnTitle
        title="Message"
        tag="h3"
        size={FontSize.LARGE}
        color={Color.WHITE}
      />
      <TextBox>
        <Text>{printMessages}</Text>
      </TextBox>
    </MassegeContent>
  );
}

const MassegeContent = styled.div`
  text-align: center;
`;

const TextBox = styled.div`
  height: 320px;
  ${Radius10}
  margin-top: 10px;
  padding: 30px;
  text-align: left;
  background: ${Color.BACKGROUND};
`;

const Text = styled.div`
  height: 100%;
  overflow-y: scroll;

  p {
    font-size: ${FontSize.REGULAR};
    line-height: 1.5;
  }
`;
