import styled from 'styled-components';

import { COLORS, TYPOGRAPHY, PRODUCT_STATUS } from 'constants';
import { formatPrice } from 'util/util';

const ProductCard = ({ product: { id, name, price, count, url }, status, clickActiveProduct }) => {
  const handleCardClick = () => {
    if (status !== PRODUCT_STATUS.ACTIVE) return;
    clickActiveProduct({ id, name, price });
  };

  return (
    <ProductCardContainer status={status} onClick={handleCardClick}>
      <HiddenName>{name}</HiddenName>
      <CountBadge>{count}</CountBadge>
      <Thumbnail src={url} alt={name} />
      {formatPrice(price)}
    </ProductCardContainer>
  );
};

const ProductCardContainer = styled.div`
  position: relative;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: ${COLORS.WHITE};
  font-size: ${TYPOGRAPHY.SIZE.MEDIUM};
  font-weight: ${TYPOGRAPHY.WEIGHT.MEDIUM};
  opacity: ${({ status }) => (status === PRODUCT_STATUS.SOLDOUT ? 0.5 : 1)};
  box-shadow: ${({ status }) =>
    status === PRODUCT_STATUS.SOLDOUT ? null : '10px 20px 20px rgba(24, 25, 27, 0.08)'};
  border: 2px solid
    ${({ status }) => (status === PRODUCT_STATUS.ACTIVE ? COLORS.BLUE : COLORS.WHITE)};
  ${({ status }) => status === PRODUCT_STATUS.ACTIVE && 'cursor: pointer'};
  &:hover {
    ${({ status }) => status === PRODUCT_STATUS.ACTIVE && 'transform:translateY(-12px)'};
  }
  transition: all 0.1s ease-in-out;
`;

const HiddenName = styled.h4`
  content-visibility: hidden;
`;

const CountBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  height: 20px;
  padding: 0 6px;
  border-radius: 40px;
  background: ${COLORS.GRAY_3};
  font-size: ${TYPOGRAPHY.SIZE.SMALL};
  font-weight: ${TYPOGRAPHY.WEIGHT.BOLD};
`;

const Thumbnail = styled.img`
  width: 88px;
  height: 88px;
`;

export default ProductCard;
