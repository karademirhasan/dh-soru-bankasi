import Sidebar from 'components/Sidebar/Sidebar';
import React from 'react';
import styles from './Layout.module.scss';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles['Layout']}>
      <div className={styles['Layout-Sidebar']}>
        <Sidebar />
      </div>
      <div className={styles['Main']}>{children}</div>
    </div>
  );
};
