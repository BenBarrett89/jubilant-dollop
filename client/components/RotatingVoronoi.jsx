import React from 'react'
import Helmet from 'react-helmet'
import { Col, Grid, Row, Well } from 'react-bootstrap'

import Constants from '../constants/rotating-voronoi-constants'

class RotatingVoronoi extends React.Component {
  render () {
    return (
      <Grid>
        <Helmet title='Rotating Voronoi' />
        <Row>
          <Col xs={12}>
            <h2><span id={Constants.titleId}>{Constants.titleText}</span></h2>
            <Well>
              <p>Gonna try some D3 in here</p>
            </Well>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default RotatingVoronoi
