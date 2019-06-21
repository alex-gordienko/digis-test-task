import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledMenu from './Menu.styled';

const Menu = () => (
  <StyledMenu>
    <NavLink
      exact={true}
      to="/"
      className="menu-link"
      activeClassName="menu-link--active"
    >
      Main Page
    </NavLink>
    <NavLink
      to="/Authorization"
      className="menu-link"
      activeClassName="menu-link--active"
    >
      Authorization
    </NavLink>
    <NavLink
      to="/about-author"
      className="menu-link"
      activeClassName="menu-link--active"
    >
      About author
    </NavLink>
  </StyledMenu>
);

export default Menu;
