const Product = ({ name, price, onClick }) => {
  return (
    <div className="product-info">
      <div className="product" onClick={onClick}>
        {name}
      </div>
      {price}
    </div>
  );
};

export default Product;
