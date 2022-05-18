import styled from "styled-components";

const Outlet = ({ purchaseTarget }) => {
  return (
    <OutletWrapper>
      <PurchasedProduct productImgSrc={purchaseTarget?.imgSrc} />
    </OutletWrapper>
  );
};

const OutletWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 150px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

const PurchasedProduct = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  top: -150px;
  left: calc(50% - 50px);

  ${({ productImgSrc }) =>
    productImgSrc
      ? `
      top: calc(100% - 100px);
      background: url(${productImgSrc}) no-repeat center;
      transform: rotate(90deg);
      background-size: contain;
      transition: 0.5s;
      transition-delay: 1s;
      `
      : ``}
`;

export default Outlet;
