import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 460px;
  margin: 50px auto;
`;

export const StyledBtn = styled.button`
  ${({ clickedTab, curTab, theme }) => {
    if (clickedTab === curTab) {
      return `
      backgroundColor:${theme.color.gray};
      color:${theme.color.white};
      `;
    } else {
      return `
      backgroundColor:${theme.color.white};
      color:${theme.color.black};
      `;
    }
  }}
  font-size: 24px;
  width: 200px;
  height: 100px;
`;
