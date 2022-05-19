import { useContext } from "react";

import { vendingMachineContext } from "App.jsx";
import OrderBox from "component/vending-machine/OrderBox";
import Product from "component/vending-machine/Product";
import * as S from "page/VendingMachine.style";

function VendingMachine() {
    const { stockLoading, itemList, totalAmout } = useContext(vendingMachineContext);

    const products = stockLoading
        ? "stockLoading..."
        : itemList.map((product) => (
              <Product
                  key={product.id}
                  name={product.img}
                  price={product.price}
                  quantity={product.quantity}
                  totalAmout={totalAmout}
              />
          ));

    return (
        <S.VendingMachineBox>
            <S.VendingMachineLeftCol>
                <S.ProductContainer>{products}</S.ProductContainer>
            </S.VendingMachineLeftCol>
            <S.VendingMachineRightCol>
                <OrderBox />
            </S.VendingMachineRightCol>
        </S.VendingMachineBox>
    );
}

export default VendingMachine;
