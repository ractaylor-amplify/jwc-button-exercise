import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const fontSize = {
  large: 21,
  medium: 18,
  small: 16,
};

const paddings = {
  large: "20px 36px",
  medium: "16px 24px",
  small: "8px 16px",
};

const Button = ({ variant, size, children }) => {
  let ButtonVariant;

  switch (variant) {
    case "outline":
      ButtonVariant = OutlineButton;
      break;
    case "ghost":
      ButtonVariant = GhostButton;
      break;
    default:
      ButtonVariant = FillButton;
      break;
  }

  return <ButtonVariant size={size}>{children}</ButtonVariant>;
};

const BaseButton = styled.button`
  font-weight: 500;
  font-family: Roboto;
  line-height: 1;
  text-transform: uppercase;
  padding: ${(props) => paddings[props.size]};
  letter-spacing: -0.02em;
  font-size: ${(props) => fontSize[props.size]}px;
  border-radius: ${(props) => (props.size === "large" ? 4 : 2)}px;
  outline-offset: 3px;
  border: none;
`;

const FillButton = styled(BaseButton)`
  color: white;
  background: ${COLORS.primary};

  &:focus {
    outline: 2px solid ${COLORS.primary};
  }

  &:hover {
    background: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(BaseButton)`
  color: ${COLORS.primary};
  background: ${COLORS.white};
  border: 2px solid ${COLORS.primary};

  &:focus {
    outline: 2px solid ${COLORS.primary};
  }

  &:hover {
    background: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(BaseButton)`
  color: ${COLORS.gray};
  background: transparent;
  border: none;

  &:focus {
    outline: 2px solid ${COLORS.transparentGray75};
  }

  &:hover {
    color: ${COLORS.black};
    background: ${COLORS.transparentGray15};
  }
`;

export default Button;
