import { useState } from "react";
const BEVERAGE_CATEGORY = [
  { id: 1, name: "커피" },
  { id: 2, name: "주스" },
  { id: 3, name: "차" },
  { id: 4, name: "디저트" },
];

const ProductCategoryTab = () => {
  const [isSelected, setIsSelected] = useState(1);

  const handleTab = (id) => {
    setIsSelected(id);
    // TODO 하위 메뉴 이동
  };

  return (
    <nav className="flex justify-evenly py-3">
      {BEVERAGE_CATEGORY.map(({ id, name }) => (
        <button
          key={id}
          onClick={() => handleTab(id)}
          className={isSelected === id && "select-tab"}
        >
          {name}
        </button>
      ))}
    </nav>
  );
};

export default ProductCategoryTab;
