import categoryData from "../../store/CategoryData.json";
import ProductCategory from "./ProductCategory";
import styles from "./CategoryBar.module.scss";
const CategoryBar = () => {
  return (
    <div className={styles.categoryBar}>
      {categoryData.map((category) => (
        <ProductCategory
          key={category.title}
          img={category.img}
          title={category.title}
          subcategory={category.subcategory}
        />
      ))}
    </div>
  );
};

export default CategoryBar;
