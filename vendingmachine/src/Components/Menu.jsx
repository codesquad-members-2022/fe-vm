import styled from 'styled-components';
import Product from './Product';
import { FlexCenter } from '../styled-components/util';

const Menu = ({ menuInfo }) => {
  return (
    <MenuList as="ul">
      {menuInfo &&
        menuInfo.map((info, index) => (
          <Product info={info} key={info.name} index={index} />
        ))}
    </MenuList>
  );
};

const MenuList = styled(FlexCenter)`
  gap: 3rem;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.padding.large};
`;

export default Menu;
