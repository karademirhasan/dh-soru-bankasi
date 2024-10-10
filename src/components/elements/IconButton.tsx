import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Backgrounds, Colors, Sizes } from 'types/enums';
import { ButtonProps } from 'types/interfaces';

const IconButton = ({
  to,
  onClick,
  size = Sizes.Medium,
  color = Colors.Black,
  background = Backgrounds.Transparent,
  children,
}: Omit<ButtonProps, 'icon' | 'iconDirection'>) => {
  const classnames = `IconButton Color-${color} Background-${background} Size-${size}`;

  if (onClick) {
    return (
      <button className={classnames} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link className={classnames} to={to || '#'}>
      {children}
    </Link>
  );
};

export default IconButton;

IconButton.propTypes = {
  to: PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([Colors])]),
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([Backgrounds])]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([Sizes])]),
};
