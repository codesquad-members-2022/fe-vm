import 'styled-components';
import { Color, FontSize, Mixin } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    fontSize: FontSize;
    mixin: Mixin;
  }
}
