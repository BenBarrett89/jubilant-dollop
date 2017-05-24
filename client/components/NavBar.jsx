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
            <NavLink to='/rotatingvoronoi'text='Rotating Voronoi' />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar
