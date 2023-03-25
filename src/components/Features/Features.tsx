import computerIcon from "../../assets/shared/icon-compatible.svg";
import bluetoothIcon from "../../assets/shared/icon-bluetooth.svg";
import batteryIcon from "../../assets/shared/icon-battery.svg";
import lightIcon from "../../assets/shared/icon-light.svg";

const Features = () => {
  return (
    <section className="features">
      <article className="card">
        <div
          style={{
            background: "#F16718",
            width: "65px",
            height: "65px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
          }}
        >
          <img
            src={computerIcon}
            alt=""
            className="card__image"
            style={{
              width: "25.14px",
              height: "20.24px",
            }}
          />
        </div>
        <h2 className="card__title">HIGHLY COMPATIBLE</h2>
        <p className="card__description">
          Easy to use and works well with all major computer brands, gaming
          consoles and mobile devices. Plug & play, no installation or driver
          needed.
        </p>
      </article>
      <article className="card">
        <div
          style={{
            background: "#F16718",
            width: "65px",
            height: "65px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
          }}
        >
          <img
            src={bluetoothIcon}
            alt=""
            className="card__image"
            style={{
              width: "17.68px",
              height: "27.86px",
            }}
          />
        </div>
        <h2 className="card__title">WIRELESS WITH BLUETOOTH</h2>
        <p className="card__description">
          Powerful 2.4G RF technology allows you to connect the cordless
          keyboard from up to 30ft away. Simply plug the unifying receiver into
          your computer.
        </p>
      </article>
      <article className="card">
        <div
          style={{
            background: "#F16718",
            width: "65px",
            height: "65px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
          }}
        >
          <img
            src={batteryIcon}
            alt=""
            className="card__image"
            style={{
              width: "31.99px",
              height: "20px",
            }}
          />
        </div>
        <h2 className="card__title">HIGH CAPACITY BATTERY</h2>
        <p className="card__description">
          Equipped with a long-lasting built-in battery, you’ll never have to
          spend a dime on replaceable ones. Enjoy 40 hours of usage time between
          charges.
        </p>
      </article>
      <article className="card">
        <div
          style={{
            background: "#F16718",
            width: "65px",
            height: "65px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "16px",
          }}
        >
          <img
            src={lightIcon}
            alt=""
            className="card__image"
            style={{
              width: "32px",
              height: "32px",
            }}
          />
        </div>

        <h2 className="card__title">RGB BACKLIT MODES</h2>
        <p className="card__description">
          Choose from 4 backlight brightness levels and adjustable breathing
          speed. Each key glows intensely in the dark and helps you type in low
          light conditions.
        </p>
      </article>
    </section>
  );
};

export default Features;
