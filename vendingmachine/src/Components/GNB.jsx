import { useState } from 'react';
import { GNBList, GNBLink } from 'components/GNB.Styled';

const GNB_TEXT = ['자판기', '지갑'];
const GNB_LINK = ['/fe-vm/', '/fe-vm/wallet'];

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
            to={GNB_LINK[index]}
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

export default GNB;
