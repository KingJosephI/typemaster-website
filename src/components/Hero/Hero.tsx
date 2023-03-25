import keyboardMobile from "../../assets/mobile/image-keyboard.jpg";
import keyboardTablet from "../../assets/tablet/image-keyboard.jpg";
import keyboardDesktop from "../../assets/desktop/image-keyboard.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Typemaster Keyboard</h1>
        <p className="hero__description">
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
        <div className="hero__ctas">
          <a href="#" className="preorderBtn hero__preorderBtn">
            Pre-order now
          </a>
          <span className="hero__releaseDate">Release on 5/27</span>
        </div>
      </div>

      <picture className="hero__picture">
        <source media="(min-width:1024px)" srcSet={keyboardDesktop} />
        <source media="(min-width:768px)" srcSet={keyboardTablet} />
        <img src={keyboardMobile} alt="keyboard" />
      </picture>
    </section>
  );
};

export default Hero;
