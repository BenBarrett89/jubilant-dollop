import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import RotatingVoronoi from '../components/RotatingVoronoi.jsx'

class RotatingVoronoiPage extends React.Component {
  render () {
    return (
      <div>
        <Helmet title='Rotating Voronoi' />
        <RotatingVoronoi {...this.props} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {}
}

module.exports = {
  RotatingVoronoiContainer: connect(mapStateToProps, mapDispatchToProps)(RotatingVoronoiPage),
  RotatingVoronoiPage
}
