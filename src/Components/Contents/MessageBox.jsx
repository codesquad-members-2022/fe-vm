import { useContext } from 'react';
import styled from 'styled-components';
import { MessageContext } from '../../Context/MessageProvider';
import EnTitle from '../EnTitle';
import { Color, FontSize, Radius10 } from '../../Assets/Common.style';

export default function MessageBox({ page }) {
  const { printMessages } = useContext(MessageContext);

  const messagesText = printMessages.map((msg, idx) => {
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
      <TextBox page={page}>
        <Text>{messagesText}</Text>
      </TextBox>
    </MassegeContent>
  );
}

const MassegeContent = styled.div`
  text-align: center;
`;

const TextBox = styled.div`
  height: ${({ page }) => (page === 'wallet' ? `296px` : '320px')};
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
