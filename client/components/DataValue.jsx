import React from 'react'
import PropTypes from 'prop-types'
import { Badge, Button } from 'react-bootstrap'

class DataValue extends React.Component {
  render () {
    return (
      <Button bsStyle='primary' onClick={() => this.props.increment(this.props.index)}>
        {this.props.index + 1} <Badge>{this.props.value}</Badge>
      </Button>
    )
  }
}

DataValue.propTypes = {
  increment: PropTypes.func,
  index: PropTypes.number,
  value: PropTypes.number
}

export default DataValue
