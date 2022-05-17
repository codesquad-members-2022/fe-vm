import Product from 'components/Product';
import { MenuList } from 'components/Menu.Styled';

const Menu = ({ menuInfo }) => {
  return (
    <MenuList as="ul">
      {menuInfo &&
        menuInfo.map((info, index) => (
          <Product
            price={info.price}
            number={info.number}
            name={info.name}
            src={info.src}
            key={info.name}
            index={index}
          />
        ))}
    </MenuList>
  );
};

export default Menu;
