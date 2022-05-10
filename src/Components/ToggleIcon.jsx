import styled from 'styled-components'
import { Absolute, Color, Relative } from 'Assets/Common.style'

export default function ToggleIconBox() {
  return (
    <ToggleBox>
      <ToggleCircle />
    </ToggleBox>
  )
}

const ToggleBox = styled.div`
  ${Relative}
  width: 110px;
  height: 50px;
  margin: 0 50px;
  border-radius: 25px;
  background: ${Color.ORANGE[100]};
`

const ToggleCircle = styled.div`
  ${Absolute}
  left: 5px;
  top: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${Color.ORANGE[200]};
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
`
