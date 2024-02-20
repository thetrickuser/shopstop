import styles from "./Header.module.css";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import Button from "./ui/Button";
import Input from "./ui/Input";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        src="../../public/brand-logo.jpg"
        alt="Logo"
        width="80"
        height="80"
      ></img>
      <Input type="text" placeholder="Search for products" styles={styles.input}/>
      <Button
        styles={styles["login-btn"]}
        content={
          <>
            <FaRegUser /> Login
          </>
        }
      />
      <Button styles={styles["cart-btn"]} content={<FaShoppingCart />} />
    </div>
  );
};

export default Header;
