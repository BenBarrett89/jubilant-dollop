import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup } from 'react-bootstrap'

import DataValue from '../components/DataValue.jsx'

class DataValues extends React.Component {
  getDataKeys () {
    return Object.keys(this.props.data) || []
  }

  render () {
    return (
      <div style={{'padding': '10px'}} >
        <ButtonGroup>
          {this.getDataKeys().map((data, index) => {
            return <DataValue key={index} index={index} value={this.props.data[data]} increment={this.props.increment} />
          })}
          <Button bsStyle='warning' onClick={() => this.props.reset()}>Clear</Button>
        </ButtonGroup>
      </div>
    )
  }
}

DataValues.propTypes = {
  data: PropTypes.object,
  increment: PropTypes.func,
  index: PropTypes.number
}

export default DataValues
