import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

import NavLink from './NavLink.jsx'

class NavBar extends React.Component {
  render () {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='/'>Jubilant Dollop</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavLink to='/introtod3'text='Intro to D3' />
            <NavLink to='/barcharts'text='Bar Charts HTML' />
            <NavLink to='/barchartssvg'text='Bar Charts SVG' />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar
