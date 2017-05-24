import React from 'react'
import { Col, Grid, Row } from 'react-bootstrap'
import * as d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'

import Constants from '../constants/intro-to-d3-constants'

class IntroToD3 extends React.Component {
  renderIntroToD3 () {
    var div = ReactFauxDOM.createElement('div')

    const x = d3.scaleTime()
      .domain([
        new Date(Date.parse('2017-01-01')),
        new Date(Date.parse('2017-04-01'))
      ])
      .range([0, 300])

    const xAxis = d3.axisBottom(x)
      .ticks(4)

    const svg = d3.select(div)
      .append('svg')
      .attr('width', 500)
      .attr('height', 350)

    svg.append('g')
      .attr('class', 'x axis')
      .call(xAxis)

    return div.toReact()
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h2><span id={Constants.titleId}>{Constants.titleText}</span></h2>
            <p>Test to try and get the graph from <a target='_blank' href='https://square.github.io/intro-to-d3/parts-of-a-graph/'>Intro to D3.js</a> working in React - except the tutorial cuts short and starts on some other thing that I don't know where to start on... so here is an x-axis drawn with D3:</p>
            {this.renderIntroToD3()}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default IntroToD3
