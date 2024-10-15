import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Colors, Sizes } from 'types/enums';
import { ButtonProps } from 'types/interfaces';
import classNames from 'classnames';
import styles from './IconButton.module.scss';
const IconButton = ({
  to,
  onClick,
  size = Sizes.Medium,
  color = Colors.Gray,
  disabled = false,
  children,
}: Omit<ButtonProps, 'icon' | 'iconDirection'>) => {
  const classname_list = classNames(styles.IconButton, styles[`Color-${color}`], styles[`Size-${size}`], {
    [styles['Disabled']]: disabled,
  });

  if (onClick) {
    return (
      <button className={classname_list} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link className={classname_list} to={to || '#'}>
      {children}
    </Link>
  );
};

export default IconButton;

IconButton.propTypes = {
  to: PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([Colors])]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([Sizes])]),
};
