/* eslint-disable react/prop-types */
import styles from "./ProductCategory.module.scss";
import SubCategoryList from "./SubCategoryList";

const ProductCategory = (props) => {
  return (
    <div className={styles.category}>
      <img src={props.img} height="100" width="100" />
      <p>{props.title}</p>
      {props.subcategory && <SubCategoryList data={props.subcategory} />}
    </div>
  );
};

export default ProductCategory;
