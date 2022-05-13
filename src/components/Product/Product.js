const Product = ({ name, price, onClick, amount }) => {
  return (
    <div className="product-info">
      <div style={price <= amount ? { color: "red" } : { color: "black" }}>
        <div className="product" onClick={onClick}>
          {name}
        </div>
        {price}
      </div>
    </div>
  );
};

export default Product;
