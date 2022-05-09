import styled from 'styled-components';

import COLORS from 'constants/colors';

const Wallet = () => (
  <WalletLayout>
    <div>Wallet</div>
  </WalletLayout>
);

const WalletLayout = styled.div`
  width: 80vw;
  padding: 30px;
  background-color: ${COLORS.WHITE};
`;
export default Wallet;
