import { Link } from 'react-router-dom';
import IconLogo from 'assets/icons/logo.svg';
import { DATA_APPS, DATA_FEEDBACK, DATA_MENU_ITEMS } from 'data/data';
import { MenuItem } from 'components/elements/MenuItem/MenuItem';
import styles from './Sidebar.module.scss';
const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.Logo}>
        <Link to="/">
          <IconLogo />
        </Link>
      </div>

      <div className={styles.Menu}>
        {DATA_MENU_ITEMS.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>

      <div className={styles.Apps}>
        {DATA_APPS.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>

      <div className={styles['Sidebar-Bottom']}>
        <MenuItem {...DATA_FEEDBACK} />
      </div>
    </div>
  );
};

export default Sidebar;
