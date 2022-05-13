import styled, { css } from 'styled-components';
import { IItem } from '@/Context/ItemContext';

interface PropsType {
  item: IItem;
  available: boolean;
  handleImageClick: Function;
}

interface TStyledView {
  available: boolean;
  item: IItem;
}

const ItemWrapper = styled.div<TStyledView>`
  ${({ theme }) => theme.mixins.flexBox('column')};
  background-color: ${props => {
    if (props.item.count === 0) {
      return css`
        ${({ theme }) => theme.colors.gray1}
      `;
    } else {
      return css`
        ${({ theme }) => theme.colors.white}
      `;
    }
  }};

  div {
    cursor: pointer;
    img {
      width: 150px;
      height: 100px;
      content: ${props => {
        if (props.item.count === 0) {
          return css`url('images/soldout.png')`;
        } else {
          return css`url(${props.item.image})`;
        }
      }};
      border: ${props => {
        if (props.available)
          return css`5px solid ${({ theme }) => theme.colors.ultramarine}`;
      }};
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  span {
    display: inline-block;
    margin: 5px 0;
  }
`;

export default function Item({
  item,
  available,
  handleImageClick,
}: PropsType): JSX.Element {
  const { text, price, count } = item;
  return (
    <>
      <ItemWrapper
        item={item}
        available={available}
        onClick={() => handleImageClick(item, available)}
      >
        <div>
          <img />
        </div>
        <InfoWrapper>
          <span>{text}</span>
          <span>가격: {price}</span>
          <span>잔여수량: {count}개</span>
        </InfoWrapper>
      </ItemWrapper>
    </>
  );
}
