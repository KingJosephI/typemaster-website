import cardStyles from "./Card.module.scss";
interface ICard {
  title: string;
  description: string;
  icon: string;
  width?: string;
  height?: string;
}

const iconContainerstyle = {
  background: "#F16718",
  width: "65px",
  height: "65px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "16px",
};

const Card = ({ title, description, icon, width, height }: ICard) => {
  return (
    <article className={cardStyles.card}>
      <div style={iconContainerstyle}>
        <img
          src={icon}
          alt=""
          className={cardStyles.card__image}
          style={{ width, height }}
        />
      </div>
      <h2 className={cardStyles.card__title}>{title}</h2>
      <p className={cardStyles.card__description}>{description}</p>
    </article>
  );
};

export default Card;
