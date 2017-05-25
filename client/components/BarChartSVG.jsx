import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'

class BarChartSVG extends React.Component {
  getData () {
    return this.props.data !== [] ? this.props.data : false
  }

  getColour () {
    return this.props.colour || '#4582ec'
  }

  renderBarChart (data) {
    var svg = ReactFauxDOM.createElement('svg')

    const values = Object.keys(data).reduce((array, key, index) => {
      array[index] = data[key]
      return array
    }, [])

    const width = 420
    const barHeight = 20

    const x = d3.scaleLinear()
      .domain([0, d3.max(values)])
      .range([0, width])

    const chart = d3.select(svg)
      .attr('width', width)
      .attr('height', barHeight * values.length)

    const bar = chart.selectAll('g')
      .data(values)
      .enter().append('g')
      .attr('transform', (d, i) => 'translate(0,' + i * barHeight + ')')

    bar.append('rect')
      .attr('width', x)
      .attr('height', barHeight - 1)
      .style('fill', this.getColour())

    bar.append('text')
      .attr('x', d => x(d) - 20)
      .attr('y', barHeight / 2 - 2)
      .attr('dy', '.35em')
      .style('fill', 'white')
      .text(d => d)

    return svg.toReact()
  }

  render () {
    return (<div>
      {this.renderBarChart(this.props.data)}
      <br />
    </div>
    )
  }
}

BarChartSVG.propTypes = {
  data: PropTypes.object,
  colour: PropTypes.string
}

export default BarChartSVG
