import logo from "../../../assets/shared/logo.svg";
import { Button as PreOrderButton } from "../../../components";
import headerStyles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <a href="#" className={headerStyles.header__logo}>
        <img src={logo} alt="logo" />
      </a>
      <PreOrderButton />
    </header>
  );
};

export default Header;
