import React from "react";

interface ICard {
  title: string;
  description: string;
  icon: string;
}

const Card = ({ title, description, icon }: ICard) => {
  return (
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
          src={icon}
          alt=""
          className="card__image"
          style={{
            width: "25.14px",
            height: "20.24px",
          }}
        />
      </div>
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
    </article>
  );
};

export default Card;
