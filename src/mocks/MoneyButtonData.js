import {uuidv4} from '../Utils';

export const MONEY_BUTTON_DATA = [
  {unit: 10000, count: 0},
  {unit: 5000, count: 0},
  {unit: 1000, count: 0},
  {unit: 500, count: 0},
  {unit: 100, count: 0},
  {unit: 50, count: 0},
  {unit: 10, count: 0},
].map(item => ({...item, id: uuidv4()}));
