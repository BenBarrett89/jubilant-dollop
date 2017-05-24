import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup, Col, Grid, Panel, Row } from 'react-bootstrap'

import BarChart from '../components/BarChart.jsx'
import DataValue from '../components/DataValue.jsx'

import Constants from '../constants/bar-charts-constants'

class BarCharts extends React.Component {
  getDataKeys () {
    return Object.keys(this.props.data) || []
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h2><span id={Constants.titleId}>{Constants.titleText}</span></h2>
            <p>Having a go at using D3 with <a target='_blank' href='http://redux.js.org/'>Redux</a></p>
            <Panel header='No props' bsStyle='warning'>
              <BarChart />
              <p>When there is no data prop being passed into the BarChart component, it displays a message stating so</p>
            </Panel>
            <Panel header='Hard coded props' bsStyle='primary'>
              <BarChart data={[5, 10, 15, 20, 25]} />
              <p>This BarChart component has hard-coded values passed into it from the BarCharts component</p>
            </Panel>
            <Panel header='Redux state props' bsStyle='success'>
              <ButtonGroup>
                {this.getDataKeys().map((data, index) => {
                  return <DataValue key={index} index={index} value={this.props.data[data]} increment={this.props.increment} />
                })}
                <Button bsStyle='warning' onClick={() => this.props.reset()}>Clear</Button>
              </ButtonGroup>
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
