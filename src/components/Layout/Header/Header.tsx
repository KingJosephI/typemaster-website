import { Button as PreOrderButton } from "../../../components";
import headerStyles from "./Header.module.scss";
import Logo from "./Logo/Logo";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Logo />
      <PreOrderButton />
    </header>
  );
};

export default Header;
