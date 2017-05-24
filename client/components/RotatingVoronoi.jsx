import React from 'react'
import Helmet from 'react-helmet'
import { Col, Grid, Row } from 'react-bootstrap'
import * as d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'

import Constants from '../constants/rotating-voronoi-constants'

class RotatingVoronoi extends React.Component {
  renderRotatingVoronoi () {
    var el = ReactFauxDOM.createElement('div')

    d3.select(el)
      .append('div')
      .html('Hello World!')

    return el.toReact()
  }

  render () {
    return (
      <Grid>
        <Helmet title='Rotating Voronoi' />
        <Row>
          <Col xs={12}>
            <h2><span id={Constants.titleId}>{Constants.titleText}</span></h2>
            <p>Test to try and get <a target='_blank' href='https://bl.ocks.org/mbostock/4636377'>Mike Bostock's Rotating Voronoi demo</a> working in React</p>
            {this.renderRotatingVoronoi()}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default RotatingVoronoi
