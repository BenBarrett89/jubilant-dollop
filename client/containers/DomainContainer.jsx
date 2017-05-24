import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import { decrement, deleteDomain, increment, postDomain, random, reset } from '../actions/domain-actions'
import Domain from '../components/Domain.jsx'

class DomainPage extends React.Component {
  render () {
    return (
      <div>
        <Helmet title='Domain' />
        <Domain {...this.props} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    domains: state.domain.domains,
    value: state.domain.value
  }
}

function mapDispatchToProps (dispatch) {
  return {
    decrement: () => {
      dispatch(decrement())
    },
    delete: index => {
      dispatch(deleteDomain(index))
    },
    increment: () => {
      dispatch(increment())
    },
    post: domain => {
      dispatch(postDomain(domain))
    },
    random: () => {
      dispatch(random())
    },
    reset: () => {
      dispatch(reset())
    }
  }
}

module.exports = {
  DomainContainer: connect(mapStateToProps, mapDispatchToProps)(DomainPage),
  DomainPage
}
