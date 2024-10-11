import React from 'react';

interface SwitchProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ label, value, onChange }) => {
  return (
    <div className="Switch">
      <div className="Switch-Label">{label}</div>
      <div className={`Switch-Button ${value ? 'Checked' : ''}`} onClick={() => onChange(!value)}></div>
      <div className="Switch-Input">
        <input
          type="checkbox"
          value={value}
          onChange={e => {
            onChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
