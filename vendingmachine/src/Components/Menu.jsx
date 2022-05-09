import styled from 'styled-components';
import Product from './Product';
import { flexCenter } from '../styled-components/util';

const MENU = [
  {
    name: '콜라',
    price: 500,
  },
  {
    name: '사이다',
    price: 1000,
  },
  {
    name: '파인애플맛 환타',
    price: 400,
  },
  {
    name: '포도맛 환타',
    price: 300,
  },
  {
    name: '레몬에이드',
    price: 900,
  },
  {
    name: '봉봉',
    price: 1200,
  },
  {
    name: '코코아 주스',
    price: 1000,
  },
  {
    name: '콜라 제로',
    price: 1000,
  },
  {
    name: '파워에이드',
    price: 2000,
  },
  {
    name: '초코 우유',
    price: 1000,
  },
  {
    name: '초코 우유2',
    price: 7000,
  },
  {
    name: '초코 우유3',
    price: 600,
  },
  {
    name: '딸바 주스',
    price: 1000,
  },
  {
    name: '바나나 우유',
    price: 500,
  },
  {
    name: '커피 우유',
    price: 1000,
  },
  {
    name: '알로에',
    price: 1200,
  },
  {
    name: '콘칩',
    price: 1000,
  },
  {
    name: '새우깡',
    price: 1000,
  },
  {
    name: '감자칩',
    price: 2000,
  },
  {
    name: '칸쵸',
    price: 1000,
  },
];

const Menu = () => {
  return (
    <MenuList as="ul">
      {MENU.map((info, index) => (
        <Product info={info} key={index} />
      ))}
    </MenuList>
  );
};

const MenuList = styled(flexCenter)`
  width: 50%;
  gap: 3rem;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.padding.large};
  border-right: 0.3rem solid ${({ theme }) => theme.color.black};
`;

export default Menu;
