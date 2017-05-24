import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import { incrementValue, resetData } from '../actions/data-actions'

import BarCharts from '../components/BarCharts.jsx'

class BarChartsPage extends React.Component {
  render () {
    return (
      <div>
        <Helmet title='Bar Charts' />
        <BarCharts {...this.props} />
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
  BarChartsContainer: connect(mapStateToProps, mapDispatchToProps)(BarChartsPage),
  BarChartsPage
}
