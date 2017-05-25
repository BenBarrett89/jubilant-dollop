import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'

class BarChartSVG extends React.Component {
  getData () {
    return this.props.data !== [] ? this.props.data : false
  }

  getValues () {
    return Object.keys(this.getData()).reduce((array, key, index) => {
      array[index] = this.getData()[key]
      return array
    }, [])
  }

  getColour () {
    return this.props.colour || '#4582ec'
  }

  renderVertical () {
    return this.props.vertical && true
  }

  renderVerticalBarChart (data) {
    var svg = ReactFauxDOM.createElement('svg')

    const width = 420
    const height = 300
    const barWidth = width / data.length

    const y = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0])

    const chart = d3.select(svg)
      .attr('width', width)
      .attr('height', height)

    const bar = chart.selectAll('g')
      .data(data)
      .enter().append('g')
      .attr('transform', (d, i) => 'translate(' + i * barWidth + ',0)')

    bar.append('rect')
       .attr('y', d => height - (height - y(d)))
       .attr('height', d => height - y(d))
       .attr('width', barWidth - 1)
       .style('fill', this.getColour())

    bar.append('text')
       .attr('x', barWidth / 2)
       .attr('y', d => y(d) + 3)
       .attr('dy', '.75em')
       .style('fill', 'white')
       .style('text-anchor', 'middle')
       .text(d => d)

    return svg.toReact()
  }

  renderHorizontalBarChart (data) {
    var svg = ReactFauxDOM.createElement('svg')

    const width = 420
    const barHeight = 20

    const x = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, width])

    const chart = d3.select(svg)
      .attr('width', width)
      .attr('height', barHeight * data.length)

    const bar = chart.selectAll('g')
      .data(data)
      .enter().append('g')
      .attr('transform', (d, i) => 'translate(0,' + i * barHeight + ')')

    bar.append('rect')
      .attr('width', x)
      .attr('height', barHeight - 1)
      .style('fill', this.getColour())

    bar.append('text')
      .attr('x', d => x(d) - 15)
      .attr('y', barHeight / 2 - 2)
      .attr('dy', '.35em')
      .style('fill', 'white')
      .style('text-anchor', 'middle')
      .text(d => d)

    return svg.toReact()
  }

  render () {
    return (<div>
      {this.renderVertical() && this.renderVerticalBarChart(this.getValues())}
      {!this.renderVertical() && this.renderHorizontalBarChart(this.getValues())}
      <br />
    </div>
    )
  }
}

BarChartSVG.propTypes = {
  data: PropTypes.object,
  colour: PropTypes.string,
  vertical: PropTypes.bool
}

export default BarChartSVG
