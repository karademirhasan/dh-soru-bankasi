import React from 'react';
import { Link } from 'react-router-dom';
import IconLogo from 'assets/icons/logo.svg';
import { DATA_APPS, DATA_FEEDBACK, DATA_MENU_ITEMS } from 'data/data';
import { MenuItem } from 'components/elements/MenuItem';
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Logo">
        <Link to="/">
          <IconLogo />
        </Link>
      </div>

      <div className="Menu">
        {DATA_MENU_ITEMS.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>

      <div className="Apps">
        {DATA_APPS.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>

      <div className="Sidebar-Bottom">
        <MenuItem {...DATA_FEEDBACK} />
      </div>
    </div>
  );
};

export default Sidebar;
