import styled from 'styled-components';

function Product({alt, price}) {
  return (
    <Container>
      <ProductImg src="#" alt={alt} />
      <ProductSelectBtn>{price}</ProductSelectBtn>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: 55px;
  width: 200px;
  height: 200px;
`;

const ProductImg = styled.img`
  display: block;
  width: 100%;
  height: 145px;
  background-color: #eee;
`;

const ProductSelectBtn = styled.button`
  display: block;
  margin: 12% auto 0;
  width: 50px;
  height: 25px;
  background-color: ${({ theme }) => theme.color.color_400};
  font-size: ${({ theme }) => theme.fontSize.small};
  border-radius: 15%;
`;
export default Product;
