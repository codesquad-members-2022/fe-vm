import styled from 'styled-components';

import { LOG_TYPE } from '@components/atoms/Log';
import { COLOR } from '@constants';

const Log = styled.li`
  ${({ type }) => type === LOG_TYPE.ERROR && `color: ${COLOR.RED};`}
  margin-bottom: 5px;
`;

export { Log };
