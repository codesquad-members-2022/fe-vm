import { useCallback } from 'react';
import { useTheme } from 'styled-components';
import styled from 'styled-components';
import StyledLink from '../../utils/StyledLink';

function GnbItem({ item, numOfItem, isActive, setActiveTab }) {
  const theme = useTheme();
  const ITEM_COLOR = {
    DEFAULT: {
      BG: theme.color.color_200,
      TEXT: theme.color.color_300,
    },
    ACTIVE: {
      BG: theme.color.color_300,
      TEXT: theme.color.color_100,
    },
  };

  const handleTabClick = useCallback(
    tabKey => {
      if (!isActive) setActiveTab(tabKey);
    },
    [isActive],
  );

  const [itemKey, { title }] = item;

  return (
    <Container
      numOfItem={numOfItem}
      bgColor={isActive ? ITEM_COLOR.ACTIVE.BG : ITEM_COLOR.DEFAULT.BG}
      onClick={() => handleTabClick(itemKey)}
    >
      <StyledLink
        to={`/${itemKey}`}
        textcolor={isActive ? ITEM_COLOR.ACTIVE.TEXT : ITEM_COLOR.DEFAULT.TEXT}
      >
        {title}
      </StyledLink>
    </Container>
  );
}

const Container = styled.li`
  width: ${({ numOfItem }) => `calc(100% / ${numOfItem})`};
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.large};
  background-color: ${({ bgColor }) => bgColor};
  text-align: center;
  line-height: 70px;
`;

export default GnbItem;
