import React from 'react';
import Navigation from './Navigation';

import '../assets/styles/layout.scss';

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <div className="layout">
      {children}
    </div>
  </div>
);

export default Layout;
