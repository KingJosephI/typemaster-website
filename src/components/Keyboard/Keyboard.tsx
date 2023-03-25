import glassMobile from "../../assets/mobile/image-glass-and-keyboard.jpg";
import glassTablet from "../../assets/tablet/image-glass-and-keyboard.jpg";
import glassDesktop from "../../assets/desktop/image-glass-and-keyboard.jpg";
import phoneMobile from "../../assets/mobile/image-phone-and-keyboard.jpg";
import phoneDesktop from "../../assets/desktop/image-phone-and-keyboard.jpg";
import phoneTablet from "../../assets/tablet/image-phone-and-keyboard.jpg";

const Keyboard = () => {
  return (
    <section className="keyboard">
      <div className="keyboard__images">
        <picture>
          <source media="(min-width:1024px)" srcSet={phoneDesktop} />
          <source media="(min-width:768px)" srcSet={phoneTablet} />
          <img src={phoneMobile} alt="" className="phone" />
          <div className="overlay"></div>
        </picture>

        <picture>
          <source media="(min-width:1024px)" srcSet={glassDesktop} />
          <source media="(min-width:768px)" srcSet={glassTablet} />
          <img src={glassMobile} alt="" className="glass" />
        </picture>
      </div>
      <div className="keyboard__content">
        <h2 className="keyboard__title">Mechanical wireless Keyboard</h2>
        <p className="keyboard__description">
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </p>
      </div>
    </section>
  );
};

export default Keyboard;
