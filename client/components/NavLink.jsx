import React from 'react'
import { Link } from 'react-router'

class NavLink extends React.Component {
  render () {
    return (
      <li className='nav-item'>
        <Link to={this.props.to}>{this.props.text}</Link>
      </li>
    )
  }
}

export default NavLink
