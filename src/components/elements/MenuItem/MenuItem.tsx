import { MenuItemProps } from 'data/data';
import { Link } from 'react-router-dom';

import styles from './MenuItem.module.scss';
export const MenuItem = ({ to, icon, text, target = '_self' }: MenuItemProps) => {
  return (
    <>
      <Link className={styles.MenuItem} target={target} title={text} to={to}>
        {typeof icon === 'string' ? <img src={icon} alt={text} /> : icon}
      </Link>
    </>
  );
};
