import React from 'react';
import Navigation from './Navigation';

import '../assets/styles/layout.scss';

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <div className="layout">
      <div className="container">
        {children}
      </div>
    </div>
  </div>
);

export default Layout;
