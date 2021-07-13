import React from 'react'

import SideMenu from './Menus/SideMenu'
import SideMenuItem from './Menus/SideMenuItem'

const Menu = (props) => (
  <SideMenu isOpen={props.isOpen} toggleMenu={props.toggleMenu}>
    <h4>
      Next Courses
      <button
        className="btn-link"
        onClick={() => props.toggleMenu()}
        style={{ cursor: 'pointer' }}
      >
        <i className="fa fa-close pull-right" />
      </button>
    </h4>
    <SideMenuItem link="#">
      Bootcamp
    </SideMenuItem>
    <SideMenuItem link="#">
      Part-time
    </SideMenuItem>
    <SideMenuItem link="#">
      Advanced React
    </SideMenuItem>
    <SideMenuItem link="#">
      React Native
    </SideMenuItem>
  </SideMenu>
)

export default Menu
