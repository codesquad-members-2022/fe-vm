import {uuidv4} from '../Utils';

export const PRODUCTS_DATA = [
  {title: '사이다', price: 900, quantity: 4},
  {title: '콜라', price: 1200, quantity: 4},
  {title: '아메리카노', price: 1500, quantity: 4},
  {title: '웰치스', price: 700, quantity: 4},
  {title: '미녀는 석류를 좋아해', price: 1200, quantity: 4},
  {title: '쿠우쿠우', price: 600, quantity: 4},
  {title: '뿌요뿌요', price: 700, quantity: 4},
  {title: '쿠우', price: 1200, quantity: 4},
  {title: '아미노산쿨', price: 1500, quantity: 4},
  {title: '맥콜', price: 1900, quantity: 4},
  {title: '미녀는 석류를 좋아해', price: 1200, quantity: 4},
  {title: '미녀는 석류를 좋아해', price: 1200, quantity: 4},
  {title: '미녀는 석류를 좋아해', price: 1200, quantity: 4},
  {title: '미녀는 석류를 좋아해', price: 1200, quantity: 4},
  {title: '미녀는 석류를 좋아해', price: 1200, quantity: 4},
  {title: '미녀는 석류를 좋아해', price: 1200, quantity: 4},
].map(item => ({...item, id: uuidv4()}));
