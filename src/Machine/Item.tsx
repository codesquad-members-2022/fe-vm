import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray1};

  img {
    min-width: 150px;
    min-height: 150px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    display: inline-block;
    margin: 5px 0;
  }
`;

export default function Item(props: { item: object }): JSX.Element {
  const [id, image, text, price] = Object.values(props.item);

  return (
    <>
      <ItemWrapper>
        <ImageWrapper>
          <img src={image} alt={text} />
        </ImageWrapper>
        <InfoWrapper>
          <span>{text}</span>
          <span>{price}</span>
        </InfoWrapper>
      </ItemWrapper>
    </>
  );
}
