import { MenuItemProps } from 'data/data';
import { Link } from 'react-router-dom';

export const MenuItem = ({ to, icon, text, target = '_blank' }: MenuItemProps) => {
  return (
    <div className="MenuItem">
      <Link target={target} title={text} to={to}>
        {icon}
      </Link>
    </div>
  );
};
