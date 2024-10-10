import React from 'react';
import Sidebar from './Sidebar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="Layout">
      <div className="Layout-Sidebar">
        <Sidebar />
      </div>
      <div className="Main">{children}</div>
    </div>
  );
};
