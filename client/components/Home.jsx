import React from 'react'
import Helmet from 'react-helmet'
import { Col, Grid, Row } from 'react-bootstrap'

import Constants from '../constants/home-constants'

class Home extends React.Component {
  render () {
    return (
      <Grid>
        <Helmet title='Home' />
        <Row>
          <Col xs={12}>
            <h2><span id={Constants.titleId}>{Constants.titleText}</span></h2>
            <p>The purpose of this site is to have a go at using <a target='_blank' href='https://d3js.org/'>D3</a> within <a target='_blank' href='https://facebook.github.io/react/'>React</a> and/or with <a target='_blank' href='http://redux.js.org/'>Redux</a></p>
            <blockquote>
              <p>React doesn't play very well with D3</p>
              <small>Someone</small>
            </blockquote>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Home
