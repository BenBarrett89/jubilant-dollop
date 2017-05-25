import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'

class BarChart extends React.Component {
  getData () {
    return this.props.data !== [] ? this.props.data : false
  }

  getColour () {
    return this.props.colour || '#4582ec'
  }

  renderDataMissing () {
    var div = ReactFauxDOM.createElement('div')
    d3.select(div).html('There is no data being passed into this bar chart')
    return div.toReact()
  }

  renderBarChart (data) {
    var div = ReactFauxDOM.createElement('div')

    const values = Object.keys(data).reduce((array, key, index) => {
      array[index] = data[key]
      return array
    }, [])

    const max = Math.max(1, values.reduce((largest, dataItem) => dataItem > largest ? dataItem : largest, 0))

    d3.select(div)
      .selectAll('div')
      .data(values)
      .enter()
      .append('div')
        .style('width', d => (Math.max(5, (d / max) * 100) + '%'))
        .style('height', '40px')
        .style('color', 'white')
        .style('background-color', this.getColour())
        .style('text-align', 'right')
        .style('padding', '5px')
        .style('margin', '1px')
        .text(d => d.toString())

    return div.toReact()
  }

  render () {
    return (<div>
      {this.props.data && this.renderBarChart(this.props.data)}
      {!this.props.data && this.renderDataMissing()}
      <br />
    </div>
    )
  }
}

BarChart.propTypes = {
  data: PropTypes.object,
  colour: PropTypes.string
}

export default BarChart
