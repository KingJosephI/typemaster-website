import keyboardMobile from "../../assets/mobile/image-keyboard.jpg";
import keyboardTablet from "../../assets/tablet/image-keyboard.jpg";
import keyboardDesktop from "../../assets/desktop/image-keyboard.jpg";
import heroStyles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={heroStyles.hero}>
      <div className={heroStyles.hero__content}>
        <h1 className={heroStyles.hero__title}>Typemaster Keyboard</h1>
        <p className={heroStyles.hero__description}>
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
        <div className={heroStyles.hero__ctas}>
          <a href="#" className={`preorderBtn ${heroStyles.hero__preorderBtn}`}>
            Pre-order now
          </a>
          <span className={heroStyles.hero__releaseDate}>Release on 5/27</span>
        </div>
      </div>

      <picture className={heroStyles.hero__picture}>
        <source media="(min-width:1024px)" srcSet={keyboardDesktop} />
        <source media="(min-width:768px)" srcSet={keyboardTablet} />
        <img src={keyboardMobile} alt="keyboard" />
      </picture>
    </section>
  );
};

export default Hero;
