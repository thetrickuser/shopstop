/* eslint-disable react/prop-types */
import styles from './ProductCategory.modules.scss'

const ProductCategory = (props) => {
  return <div className={styles.category}>
    <img src={props.img} alt={props.title}/>
    <p>{props.title}</p>
  </div>;
};

export default ProductCategory;
