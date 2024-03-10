/* eslint-disable react/prop-types */
import styles from "./ProductCategory.module.scss";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";

const ProductCategory = (props) => {
  return (
    <div className={styles.category}>
      <img src={props.img} height="100" width="100" />
      <div className={styles["category__item"]}>
        <span>{props.title}</span>
        {props.subcategory && (
          <RxCaretDown
            style={{ fontSize: "1.5rem" }}
            className={styles["category__item__dropdown"]}
          />
        )}
      </div>
      {props.subcategory && (
        <ul className={styles["subcategory-list"]}>
          {props.subcategory.map((category) => (
            <li key={category.title} className={styles["subcategory-item"]}>
              {category.title}
              {category.subcategory && (
                <>
                  <span>
                    <RxCaretRight style={{ fontSize: "1.5rem" }} />{" "}
                  </span>
                  <ul className={styles["innerCategory-list"]}>
                    {category.subcategory.map((innerCategory) => (
                      <li
                        key={innerCategory.title}
                        className={styles["innerCategory-item"]}
                      >
                        {innerCategory.title}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductCategory;
