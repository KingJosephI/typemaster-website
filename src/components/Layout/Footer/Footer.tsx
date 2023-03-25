import footerStyles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <span className={footerStyles.footer__title}>Typemaster 2021 </span>| All
      Rights Reserved
    </footer>
  );
};

export default Footer;
