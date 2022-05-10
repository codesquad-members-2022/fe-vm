import styled from 'styled-components';
import Product from './Product';
import { FlexCenter } from '../styled-components/util';

const MENU_INFO = [
  {
    name: '맥주',
    src: '/images/beer.png',
    price: 500,
  },
  {
    name: '뼈다귀',
    src: '/images/bone.png',
    price: 1000,
  },
  {
    name: '빵',
    src: '/images/bread.png',
    price: 400,
  },
  {
    name: '케이크',
    src: '/images/cupcake.png',
    price: 300,
  },
  {
    name: '치즈',
    src: '/images/cheese.png',
    price: 900,
  },
  {
    name: '칵테일',
    src: '/images/cocktail.png',
    price: 1200,
  },
  {
    name: '커피',
    src: '/images/coffee.png',
    price: 1000,
  },
  {
    name: '에너지 드링크',
    src: '/images/energy-drink.png',
    price: 1000,
  },
  {
    name: '감자튀김',
    src: '/images/french-fries.png',
    price: 2000,
  },
  {
    name: '과일',
    src: '/images/fruit.png',
    price: 1000,
  },
  {
    name: '햄버거',
    src: '/images/hamburger.png',
    price: 7000,
  },
  {
    name: '삼각김밥',
    src: '/images/onigiri.png',
    price: 600,
  },
  {
    name: '피자',
    src: '/images/pizza.png',
    price: 1000,
  },
  {
    name: '밥',
    src: '/images/rice-bowl.png',
    price: 500,
  },
  {
    name: '사이다',
    src: '/images/soda-can.png',
    price: 1000,
  },
  {
    name: '스파게티',
    src: '/images/spaguetti.png',
    price: 1000,
  },
  {
    name: '탄산수',
    src: '/images/sparkling-water.png',
    price: 1200,
  },
  {
    name: '타코',
    src: '/images/taco.png',
    price: 1000,
  },
  {
    name: '붕어빵',
    src: '/images/taiyaki.png',
    price: 1000,
  },
  {
    name: '물',
    src: '/images/water.png',
    price: 2000,
  },
];

const Menu = () => {
  return (
    <MenuList as="ul">
      {MENU_INFO.map((info, index) => (
        <Product info={info} key={index} />
      ))}
    </MenuList>
  );
};

const MenuList = styled(FlexCenter)`
  gap: 3rem;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.padding.large};
`;

// const style

export default Menu;
