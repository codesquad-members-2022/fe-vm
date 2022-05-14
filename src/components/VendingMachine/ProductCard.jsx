import styled from 'styled-components';

import { COLORS, TYPOGRAPHY } from 'constants';
import { formatPrice } from 'util/util';

const ProductCard = ({ name, price, count, url }) => {
  return (
    <ProductCardContainer>
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
  box-shadow: 10px 20px 20px rgba(24, 25, 27, 0.08);
  font-size: ${TYPOGRAPHY.SIZE.MEDIUM};
  font-weight: ${TYPOGRAPHY.WEIGHT.MEDIUM};
  cursor: pointer;
`;

const HiddenName = styled.span`
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
