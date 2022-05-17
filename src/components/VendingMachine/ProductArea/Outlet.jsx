import styled from "styled-components";

const Outlet = () => {
  return <OutletWrapper></OutletWrapper>;
};

const OutletWrapper = styled.div`
  width: 80%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default Outlet;
