import { useState } from 'react';
import styled from 'styled-components';

const GNB_TEXT = ['자판기', '지갑'];

const GNB = () => {
  const [tabNumber, setTabNumber] = useState(0);

  const handleClickTab = index => {
    setTabNumber(index);
  };

  return (
    <GNBList>
      {GNB_TEXT.map((text, index) => (
        <li key={index} className={tabNumber === index ? 'active' : null}>
          <GNBLink
            href="#"
            onClick={() => {
              handleClickTab(index);
            }}
          >
            {text}
          </GNBLink>
        </li>
      ))}
    </GNBList>
  );
};

const GNBList = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  .active {
    border-bottom: ${({ theme }) => theme.borderSize.medium} solid
      ${({ theme }) => theme.color.black};
  }
`;

const GNBLink = styled.a`
  display: block;
  padding: ${({ theme }) => theme.padding.medium};
`;

export default GNB;
