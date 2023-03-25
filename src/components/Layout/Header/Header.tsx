import logo from "../../../assets/shared/logo.svg";
import headerStyles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <a href="#" className={headerStyles.header__logo}>
        <img src={logo} alt="logo" />
      </a>
      <a href="#" className={`preorderBtn ${headerStyles.header__preorderBtn}`}>
        Pre-order now
      </a>
    </header>
  );
};

export default Header;
