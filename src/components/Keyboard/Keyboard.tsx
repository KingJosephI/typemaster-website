import glassMobile from "../../assets/mobile/image-glass-and-keyboard.jpg";
import glassTablet from "../../assets/tablet/image-glass-and-keyboard.jpg";
import glassDesktop from "../../assets/desktop/image-glass-and-keyboard.jpg";
import phoneMobile from "../../assets/mobile/image-phone-and-keyboard.jpg";
import phoneDesktop from "../../assets/desktop/image-phone-and-keyboard.jpg";
import phoneTablet from "../../assets/tablet/image-phone-and-keyboard.jpg";
import keyboardStyles from "./Keyborad.module.scss";

const Keyboard = () => {
  return (
    <section className={keyboardStyles.keyboard}>
      <div className={keyboardStyles.keyboard__images}>
        <picture>
          <source media="(min-width:1024px)" srcSet={phoneDesktop} />
          <source media="(min-width:768px)" srcSet={phoneTablet} />
          <img src={phoneMobile} alt="" className={keyboardStyles.phone} />
          <div className={keyboardStyles.overlay}></div>
        </picture>

        <picture>
          <source media="(min-width:1024px)" srcSet={glassDesktop} />
          <source media="(min-width:768px)" srcSet={glassTablet} />
          <img src={glassMobile} alt="" className={keyboardStyles.glass} />
        </picture>
      </div>
      <div className={keyboardStyles.keyboard__content}>
        <h2 className={keyboardStyles.keyboard__title}>
          Mechanical wireless Keyboard
        </h2>
        <p className={keyboardStyles.keyboard__description}>
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </p>
      </div>
    </section>
  );
};

export default Keyboard;
