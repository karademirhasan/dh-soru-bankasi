import { ReactNode } from 'react';
import styles from './IconWrapper.module.scss';
export const IconWrapper = ({ children }: { children: ReactNode }) => {
  return <span className={styles.IconWrapper}>{children}</span>;
};
