import { ReactNode } from 'react';

const Badge = ({ children }: { children: ReactNode }) => {
  return <span className="Badge">{children}</span>;
};
export default Badge;
