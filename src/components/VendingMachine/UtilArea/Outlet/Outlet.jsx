import styled from "styled-components";

const Outlet = () => {
  return <OutletWrapper></OutletWrapper>;
};

const OutletWrapper = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: inset 0px -10px 40px ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.grey2};
  border-radius: 5px;
`;

export default Outlet;
