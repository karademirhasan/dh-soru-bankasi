import { MenuItemProps } from 'data/data';
import { Link } from 'react-router-dom';

import styles from './MenuItem.module.scss';
export const MenuItem = ({ to, icon, text, target = '_blank' }: MenuItemProps) => {
  return (
    <div className={styles.MenuItem}>
      <Link target={target} title={text} to={to}>
        {icon}
      </Link>
    </div>
  );
};
