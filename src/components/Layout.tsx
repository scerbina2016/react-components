import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
class Layout extends React.Component {
  render() {
    return (
      <div>
        <header className="mainHeader">
          <NavLink className="navLink" to="/">
            Main
          </NavLink>
          <NavLink className="navLink" to="about">
            About as
          </NavLink>
        </header>
        <Outlet />
      </div>
    );
  }
}

export default Layout;
