import styled from "styled-components";

import { FONT } from "../../constants/fonts";
import Text from "../../Text";
import colors from "../../constants/colors";
import VmWalletContextStore from "../../stores/VmWalletStore";
import { useContext, useEffect, useState } from "react";

const Product = ({ product }) => {
  const VmWalletInfo = useContext(VmWalletContextStore);
  const [productDisplay, setProductDisplay] = useState("");

  const onProductClick = () => {
    if (productDisplay === "red") {
      VmWalletInfo.setCurrMoney(VmWalletInfo.currMoney - product.price);
    }
  };

  useEffect(() => {
    if (VmWalletInfo.currMoney >= product.price) {
      setProductDisplay("red");
    } else {
      setProductDisplay("lightWhite");
    }
  });

  return (
    <ProductWrap display={productDisplay} onClick={onProductClick}>
      <Img src={product.imgURL} alt={product.title} />
      <Title>
        <Text font={FONT.MEDIUM_BOLD} textColor={colors.lightWhite}>
          {product.title}
        </Text>
      </Title>
      <Price>
        <Text font={FONT.MEDIUM_BOLD} textColor={colors.lightBlue}>
          {product.price}원
        </Text>
      </Price>
    </ProductWrap>
  );
};

const ProductWrap = styled.div`
  width: calc(100% / 3.5);
  height: calc(100% / 4.2);
  margin-top: 1%;
  border-radius: 10px;
  border: 3px solid ${(props) => colors[props.display]};
  cursor: ${(props) => (props.display === "red" ? "pointer" : "")};
`;
const Img = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 10px;
`;
const Title = styled.div`
  width: 100%;
  margin-top: 3%;
  text-align: center;
  color: ${colors.lightWhite};
`;
const Price = styled.div`
  width: 50%;
  background-color: #fefefe;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin: 2% auto 0 auto;
`;

export default Product;
