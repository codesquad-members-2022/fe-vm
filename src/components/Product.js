const Product = ({ name, price }) => {
  return (
    <div className="ab">
      <div className="product">{name}</div>
      {price}
    </div>
  );
};

export default Product;
