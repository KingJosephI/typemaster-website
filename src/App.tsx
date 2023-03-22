import "./app.scss";
import logo from "./assets/shared/logo.svg";

function App() {
  return (
    <div className="app">
      <header className="header">
        <a href="#" className="header__logo">
          <img src={logo} alt="logo" />
        </a>
        <a href="#" className="header__preorderBtn">
          Pre-order now
        </a>
      </header>
      <h1>Typemaster Keyboard</h1>
    </div>
  );
}

export default App;
