import logo from "../../../assets/shared/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        <img src={logo} alt="logo" />
      </a>
      <a href="#" className="preorderBtn header__preorderBtn">
        Pre-order now
      </a>
    </header>
  );
};

export default Header;
