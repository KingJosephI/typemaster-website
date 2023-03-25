import React, { useState } from "react";
import ButtonStyles from "./Button.module.scss";

interface IButton extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  background?: string;
  color?: string;
  backgroundHover?: string;
}

const Button: React.FC<IButton> = ({
  background,
  color,
  backgroundHover,
}: IButton) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#"
      className={ButtonStyles.preorderBtn}
      style={{ background: isHovered ? backgroundHover : background, color }}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Pre-order now
    </a>
  );
};

export default Button;
