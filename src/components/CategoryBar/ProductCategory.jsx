/* eslint-disable react/prop-types */
import styles from "./ProductCategory.module.scss";
import SubCategoryList from "./SubCategoryList";
import { RxCaretDown } from "react-icons/rx";

const ProductCategory = (props) => {
  return (
    <div className={styles.category}>
      <img src={props.img} height="100" width="100" />
      <div className={styles["category__action"]}>
        <p>{props.title}</p>
        {props.subcategory && (
          <div className={styles.subcategory}>
            <RxCaretDown
              style={{ fontSize: "1.5rem" }}
              className={styles['subcategory-dropdown']}
            />
          </div>
        )}
        {props.subcategory &&
        <div className={styles['subcategory-list']}>
          <SubCategoryList data={props.subcategory}/>
        </div>}
      </div>
    </div>
  );
};

export default ProductCategory;
