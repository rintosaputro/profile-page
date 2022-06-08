import React from 'react';
import Navigation from './Navigation';

import '../assets/styles/layout.scss';

const Layout = ({ children }) => (
  <div className="layout">
    <Navigation />
    {children}
  </div>
);

export default Layout;
