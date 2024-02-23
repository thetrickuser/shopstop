import categoryData from "./CategoryData.json";
import ProductCategory from "./ProductCategory";
import styles from './CategoryBar.module.scss';
const CategoryBar = () => {
  return (
    <div className={styles.categoryBar}>
      {categoryData.map((category) => (
        <ProductCategory
          img={category.img}
          title={category.title}
          subcategory={category.subcategory}
        />
      ))}
    </div>
  );
};

export default CategoryBar;
