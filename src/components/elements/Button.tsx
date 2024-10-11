import React, { createElement, memo, ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Backgrounds, ButtonVariant, Colors, IconDirection, Sizes } from 'types/enums';
import { ButtonProps } from 'types/interfaces';
import { ButtonHTMLAttributes } from 'react';

const Button = ({
  to,
  onClick,
  icon,
  iconDirection = IconDirection.Start,
  size = Sizes.Medium,
  color = Colors.Black,
  background = Backgrounds.Transparent,
  variant = ButtonVariant.Primary,
  children,
}: ButtonProps) => {
  const classnames = `Button Variant-${variant} Color-${color} Background-${background} Size-${size} IconDirection-${iconDirection}`;

  return (
    <ButtonTag component={onClick ? 'button' : Link} className={classnames} onClick={onClick} to={to}>
      {icon ? <span className="icon">{icon}</span> : null}
      <span className="label">{children}</span>
    </ButtonTag>
  );
};

export default memo(Button);

Button.propTypes = {
  to: PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([Colors])]),
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([Backgrounds])]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([Sizes])]),
  icon: PropTypes.node,
};

interface ButtonTagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  component: React.ElementType | string;
  to?: string;
}

const ButtonTag = ({ component, children, ...props }: ButtonTagProps) => {
  return createElement(component, props, children);
};
