import 'styled-components';
import { Color, FontSize } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Color;
    fontSize: FontSize;
  }
}
