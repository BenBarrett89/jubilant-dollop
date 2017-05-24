import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import IntroToD3 from '../components/IntroToD3.jsx'

class IntroToD3Page extends React.Component {
  render () {
    return (
      <div>
        <Helmet title='Intro To D3' />
        <IntroToD3 {...this.props} />
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
  IntroToD3Container: connect(mapStateToProps, mapDispatchToProps)(IntroToD3Page),
  IntroToD3Page
}
