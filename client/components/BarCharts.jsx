import React from 'react'
import PropTypes from 'prop-types'
import { Col, Grid, Panel, Row } from 'react-bootstrap'

import BarChart from '../components/BarChart.jsx'
import DataValues from '../components/DataValues.jsx'

import Constants from '../constants/bar-charts-constants'

class BarCharts extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h2><span id={Constants.titleId}>{Constants.titleText}</span></h2>
            <p>Having a go at using D3 with <a target='_blank' href='http://redux.js.org/'>Redux</a> - bar chart based on <a target='_blank' href='https://bost.ocks.org/mike/bar/'>this tutorial by Mike Bostock</a></p>
            <Panel header='No props' bsStyle='warning'>
              <BarChart />
              <p>When there is no data prop being passed into the BarChart component, it displays a message stating so</p>
            </Panel>
            <Panel header='Hard coded props' bsStyle='primary'>
              <BarChart data={{0: 5, 1: 10, 2: 15, 3: 20, 4: 25}} />
              <p>This BarChart component has hard-coded values passed into it from the BarCharts component</p>
            </Panel>
            <Panel header='Redux state props' bsStyle='success'>
              <DataValues data={this.props.data} increment={this.props.increment} reset={this.props.reset} />
              <BarChart data={this.props.data} colour='#3fad46' />
              <p>This BarChart component has data passed to it from props, linked from the Redux state in the BarChartContainer</p>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

BarCharts.propTypes = {
  data: PropTypes.object,
  increment: PropTypes.func,
  reset: PropTypes.func
}

export default BarCharts
