import "./app.scss";
import logo from "./assets/shared/logo.svg";
import heroImage from "./assets/mobile/image-keyboard.jpg";

function App() {
  return (
    <div className="app">
      <header className="header">
        <a href="#" className="header__logo">
          <img src={logo} alt="logo" />
        </a>
        <a href="#" className="preorderBtn header__preorderBtn">
          Pre-order now
        </a>
      </header>
      <main>
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
            <img src={heroImage} alt="keyboard" />
          </picture>
        </section>
      </main>

      <footer className="footer">
        <span className="footer__title">Typemaster 2021 </span>| All Rights
        Reserved
      </footer>
    </div>
  );
}

export default App;
