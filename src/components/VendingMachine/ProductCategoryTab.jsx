import { BEVERAGE_CATEGORY } from "constants/product";

const ProductCategoryTab = ({ tabIndex, setTabIndex }) => {
  const handleTab = (id) => {
    setTabIndex(id);
  };

  return (
    <nav className="flex justify-evenly py-3">
      {BEVERAGE_CATEGORY.map(({ id, name }) => (
        <button
          key={id}
          onClick={() => handleTab(id)}
          className={`${tabIndex === id && "select-tab"}`}
        >
          {name}
        </button>
      ))}
    </nav>
  );
};

export default ProductCategoryTab;
