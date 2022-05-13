import "./Product.css";
const Product = ({ name, price, onClick, accumulatedPrice }) => {
  return (
    <div className="product-info">
      <div
        style={
          price <= accumulatedPrice ? { color: "red" } : { color: "black" }
        }
      >
        <div className="product" onClick={onClick}>
          {name}
        </div>
        {price}
      </div>
    </div>
  );
};

export default Product;
