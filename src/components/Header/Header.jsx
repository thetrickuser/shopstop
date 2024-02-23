import styles from "./Header.module.scss";
import { FaSearch, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles["header__actions"]}>
          <div className={styles["header__actions__left"]}>
            <div className={styles.hamburger}>
              <RxHamburgerMenu />
            </div>
            <div className={styles.icon}>ShopStop</div>
          </div>
          <div className={styles["header__search"]}>
            <FaSearch />
            <Input type="text" placeholder="Search for Products" />
          </div>
          <div className={styles["header__actions__right"]}>
            <div className={styles.login}>
              <FaUserCircle /> Login
            </div>
            <div className={styles.cart}>
              <FaShoppingBag />
            </div>
          </div>
        </div>
        <div className={styles.search}>
          <FaSearch />
          <Input type="text" placeholder="Search for Products" />
        </div>
      </div>
    </>
  );
};

export default Header;
