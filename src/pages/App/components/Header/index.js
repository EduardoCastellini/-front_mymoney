import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, NavItem, Row, Icon} from 'react-materialize';

const Header = () => (
  <div>
    <div className="section">
      <Navbar brand={<a />} alignLinks="right">
        <NavItem href="get-started.html">
          <Icon>
            search
          </Icon>
        </NavItem>
      </Navbar>
    </div>
    <div className="section">
        <Navbar brand={<a />} alignLinks="right">
          <NavItem href="get-started.html">
            Link with left icon
            <Icon left>
              search
            </Icon>
          </NavItem>
          <NavItem href="get-started.html">
            Link with right icon
              <Icon right>
                view_module
              </Icon>
          </NavItem>
        </Navbar>
    </div>
  </div>

);

export default Header;