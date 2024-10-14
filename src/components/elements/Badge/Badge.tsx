import { ReactNode } from 'react';
import styles from './Badge.module.scss';

const Badge = ({ children }: { children: ReactNode }) => {
  return <span className={styles.Badge}>{children}</span>;
};
export default Badge;
