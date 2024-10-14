import React from 'react';

import styles from './Switch.module.scss';
interface SwitchProps {
  label: string;
  value: boolean | undefined;
  onChange: (value: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ label, value, onChange }) => {
  return (
    <div className={styles['Switch']}>
      <div className={styles['Switch-Label']}>{label}</div>
      <div
        className={`${styles['Switch-Button']} ${value ? styles['checked'] : ''}`}
        onClick={() => onChange(!value)}
      ></div>
      <div className={styles['Switch-Input']}>
        <input type="checkbox" checked={value} onChange={e => onChange(e.target.checked)} />
      </div>
    </div>
  );
};
