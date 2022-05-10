import { css } from 'styled-components'

const Relative = css`
  position: relative;
`

const Absolute = css`
  position: absolute;
`

const F_basic = css`
  display: flex;
`

const F_basicCenter = css`
  ${F_basic}
  align-items: center;
`

const F_Center = css`
  ${F_basic}
  align-items: center;
  justify-content: center;
`

const Radius10 = css`
  border-radius: 10px;
`

const FontSize = {
  DISPLAY: '2rem', // 32px
  X_LARGE: '1.875rem', // 30px
  LARGE: '1.5rem', // 24px
  MEDIUM: '1.25rem', // 20px
  REGULAR: '1rem', // 16px
  SMALL: '0.875rem', // 14px
}

const Color = {
  BLACK: '#1B1B1B',
  ORANGE: {
    100: '#FFA800',
    200: '#FF7A00',
  },
  GRAY: '#C4C4C4',
  WHITE: '#FFF',
  BACKGROUND: '#FFFCE4',
}

export {
  Relative,
  Absolute,
  F_basicCenter,
  F_Center,
  Radius10,
  FontSize,
  Color,
}
