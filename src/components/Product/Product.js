import "./Product.css";
import { productData } from "../../datas/ProductData";
import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import { MoneyContext } from "../../context/MoneyContext";

const Product = () => {
  const { accumulatedPrice, setAccumulatedPrice } = useContext(MoneyContext);
  const { setMessage } = useContext(MessageContext);

  const selectProductHandler = (event) => {
    insertMessage(event.target.innerText);
    let productPrice = getProductPrice(event.target.innerText);
    setAccumulatedPrice(accumulatedPrice - productPrice);
  };

  const insertMessage = (product) => {
    const newMessage = {
      content: product + "선택",
    };
    setMessage((prev) => [newMessage.content, ...prev]);
  };

  const getProductPrice = (productPrice) => {
    let arr = productData.find((v) => v.name === productPrice);
    return arr.price;
  };

  return (
    <div className="product-wrapper">
      <div className="product-info">
        {productData.map((v) => (
          <div
            key={v.id}
            style={
              v.price <= accumulatedPrice
                ? { color: "red" }
                : { color: "black" }
            }
          >
            <div className="product" onClick={selectProductHandler}>
              <div>{v.name}</div>
            </div>
            <div>{v.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
