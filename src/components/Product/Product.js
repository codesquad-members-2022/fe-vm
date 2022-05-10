const Product = ({ name, price }) => {
  return (
    <div className="product-info">
      <div className="product">{name}</div>
      {price}
    </div>
  );
};

export default Product;
