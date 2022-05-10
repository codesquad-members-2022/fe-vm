import { Link } from 'react-router-dom'
import styled from 'styled-components'
import EnTitle from './EnTitle'
import ToggleIcon from './ToggleIcon'
import { Color, FontSize, F_Center } from '../Assets/Common.style'

export default function Header() {
  return (
    <HEADER>
      <TabMenu>
        <Link to="/">
          <EnTitle
            title="Vending Machine"
            tag="h2"
            size={FontSize.DISPLAY}
            color={Color.BLACK}
          />
        </Link>
        <ToggleIcon />
        <Link to="/wallet">
          <EnTitle
            title="Wallet"
            tag="h2"
            size={FontSize.DISPLAY}
            color={Color.BLACK}
          />
        </Link>
      </TabMenu>
    </HEADER>
  )
}

const HEADER = styled.header`
  margin-bottom: 32px;
`

const TabMenu = styled.nav`
  ${F_Center}
`
