import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import { incrementValue, resetData } from '../actions/data-actions'

import BarChartsSVG from '../components/BarChartsSVG.jsx'

class BarChartsSVGPage extends React.Component {
  render () {
    return (
      <div>
        <Helmet title='Bar Charts SVG' />
        <BarChartsSVG {...this.props} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    data: state.data
  }
}

function mapDispatchToProps (dispatch) {
  return {
    increment: index => {
      dispatch(incrementValue(index))
    },
    reset: () => {
      dispatch(resetData())
    }
  }
}

module.exports = {
  BarChartsSVGContainer: connect(mapStateToProps, mapDispatchToProps)(BarChartsSVGPage),
  BarChartsSVGPage
}
