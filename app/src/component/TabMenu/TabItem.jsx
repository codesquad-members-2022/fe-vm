import styled from 'styled-components';
import StyledLink from '../utils/utils';

const ITEM_COLOR = {
  DEFAULT: {
    BG: '#EEE',
    TEXT: '#30475E',
  },
  ACTIVE: {
    BG: '#30475E',
    TEXT: '#FFF',
  },
};

function TabItem({ tab, numOfItem, isActive, setActiveTab }) {
  const [tabKey, { title }] = tab;

  return (
    <Tab
      numOfItem={numOfItem}
      bgColor={isActive ? ITEM_COLOR.ACTIVE.BG : ITEM_COLOR.DEFAULT.BG}
      onClick={() => {
        if (!isActive) setActiveTab(tabKey);
      }}
    >
      <StyledLink
        to={`/${tabKey}`}
        textcolor={isActive ? ITEM_COLOR.ACTIVE.TEXT : ITEM_COLOR.DEFAULT.TEXT}
      >
        {title}
      </StyledLink>
    </Tab>
  );
}

const Tab = styled.li`
  width: ${({ numOfItem }) => `calc(100% / ${numOfItem})`};
  height: 100%;
  font-size: 25px;
  border: none;
  cursor: pointer;
  background-color: ${({ bgColor }) => bgColor};
  text-align: center;
  text-decoration: none;
  line-height: 70px;
`;

export default TabItem;
