import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import headConfig from '../config/head-config'
import NavBar from '../components/NavBar.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          defaultTitle={headConfig.DEFAULT_TITLE}
          titleTemplate={headConfig.TITLE_TEMPLATE}
          meta={headConfig.HEAD_META}
          />
        <NavBar />
        <div className='container'>
          { this.props.children }
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default App
