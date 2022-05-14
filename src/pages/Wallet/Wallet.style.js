import styled from 'styled-components';

import FlexBox from '@/styles/FlexBox';

const WalletWrapper = styled(FlexBox)`
  flex-direction: column;
  justify-content: space-around;
  width: 1100px;
  height: 600px;
`;

const BalanceWrapper = styled(FlexBox)`
  flex-direction: column;
`;

const MoneyWrapper = styled(FlexBox)`
  flex-direction: column;
`;

const MoneyItemWrapper = styled(FlexBox)`
  width: 1000px;
  justify-content: space-around;
`;

export { WalletWrapper, BalanceWrapper, MoneyWrapper, MoneyItemWrapper };
