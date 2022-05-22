import styled from 'styled-components';

export const DISPLAY_WIDTH = 720;

export enum CN {
  DISPLAY = 'vm-display',
  INPUT_CONTROLLER = 'vm-input-controller',
  ACTION_LOGS = 'vm-action-logs',
}

export const HomeLayout = styled.main`
  width: 1080px;
  border: 1px solid ${({ theme }) => theme.color.black};
`;

export const HomeLayer = styled.div`
  display: grid;
  grid-template-columns: ${DISPLAY_WIDTH}px 360px;
  grid-template-rows: 120px ${DISPLAY_WIDTH - 120}px;
  word-break: break-word;

  .${CN.DISPLAY} {
    padding: 20px;
    grid-row: 1/3;
    grid-column: 1/2;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 15px;
    overflow-y: auto;
  }

  .${CN.ACTION_LOGS} {
    margin-right: 4px;
    border: 1px solid ${({ theme }) => theme.color.black};
  }
`;
