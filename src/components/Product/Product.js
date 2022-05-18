import "./Product.css";
import { productData } from "../../datas/ProductData";
import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import { MoneyContext } from "../../context/MoneyContext";

const Product = () => {
  const { accumulatedPrice } = useContext(MoneyContext);
  const { setMessage } = useContext(MessageContext);
  const selectProductHandler = (event) => {
    setMessage((prev) => [event.target.innerText, ...prev]);
  };
  return (
    <div className="product-wrapper">
      <div className="product-info" onClick={selectProductHandler}>
        {productData.map((v) => (
          <div
            key={v.id}
            id={v.id}
            style={
              v.price <= accumulatedPrice
                ? { color: "red" }
                : { color: "black" }
            }
          >
            <div className="product">
              <div>{v.name}</div>
              <div>{v.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
