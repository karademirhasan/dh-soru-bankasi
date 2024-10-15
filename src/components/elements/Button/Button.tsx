import React, { createElement, memo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Colors, IconDirection, Sizes } from 'types/enums';
import { ButtonProps } from 'types/interfaces';
import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  to,
  onClick,
  icon,
  iconDirection = IconDirection.Start,
  size = Sizes.Medium,
  color = Colors.Gray,
  children,
  className = '',
}: ButtonProps) => {
  const classname = classNames(
    styles.Button,
    styles[`Color-${color}`],
    styles[`Size-${size}`],
    { [styles[`IconDirection-${iconDirection}`]]: icon },
    { [styles[`has-icon`]]: icon },
    className,
  );

  return (
    <ButtonTag component={onClick ? 'button' : Link} className={classname} onClick={onClick} to={to}>
      {icon ? <span className={styles['Button-Icon']}>{icon}</span> : null}
      <span className={styles['Button-Label']}>{children}</span>
    </ButtonTag>
  );
};

export default memo(Button);

Button.propTypes = {
  to: PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([Colors])]),
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
