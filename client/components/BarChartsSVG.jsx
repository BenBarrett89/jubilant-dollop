import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup, Col, Grid, Panel, Row } from 'react-bootstrap'

import BarChartSVG from '../components/BarChartSVG.jsx'
import DataValue from '../components/DataValue.jsx'

import Constants from '../constants/bar-charts-svg-constants'

class BarChartsSVG extends React.Component {
  getDataKeys () {
    return Object.keys(this.props.data) || []
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h2><span id={Constants.titleId}>{Constants.titleText}</span></h2>
            <p>Having a go at using D3 with <a target='_blank' href='http://redux.js.org/'>Redux</a> - horizonal bar chart based on <a target='_blank' href='https://bost.ocks.org/mike/bar/2'>this tutorial by Mike Bostock</a> and vertical bar charts based on <a target='_blank' href='https://bost.ocks.org/mike/bar/3'>this tutorial by Mike Bostock</a> (these bar charts are drawn with SVG rather than HTML)</p>
            <Panel header='Hard coded props' bsStyle='primary'>
              <BarChartSVG data={{0: 5, 1: 10, 2: 15, 3: 20, 4: 25}} />
              <p>This BarChartSVG component has hard-coded values passed into it from the BarChartsSVG component</p>
            </Panel>
            <Panel header='Redux state props' bsStyle='success'>
              <ButtonGroup>
                {this.getDataKeys().map((data, index) => {
                  return <DataValue key={index} index={index} value={this.props.data[data]} increment={this.props.increment} />
                })}
                <Button bsStyle='warning' onClick={() => this.props.reset()}>Clear</Button>
              </ButtonGroup>
              <BarChartSVG data={this.props.data} colour='#3fad46' />
              <p>This BarChartSVG component has data passed to it from props, linked from the Redux state in the BarChartSVGContainer</p>
            </Panel>
            <Panel header='Hard coded props vertical' bsStyle='primary'>
              <BarChartSVG data={{0: 5, 1: 10, 2: 15, 3: 20, 4: 25}} vertical />
              <p>This BarChartSVG component has hard-coded values passed into it from the BarChartsSVG component - it uses a prop to render it as a vertical bar chart rather than horizonal</p>
            </Panel>
            <Panel header='Redux state props' bsStyle='success'>
              <ButtonGroup>
                {this.getDataKeys().map((data, index) => {
                  return <DataValue key={index} index={index} value={this.props.data[data]} increment={this.props.increment} />
                })}
                <Button bsStyle='warning' onClick={() => this.props.reset()}>Clear</Button>
              </ButtonGroup>
              <BarChartSVG data={this.props.data} colour='#3fad46' vertical />
              <p>This BarChartSVG component has data passed to it from props, linked from the Redux state in the BarChartSVGContainer - it uses a prop to render it as a vertical bar chart rather than horizonal</p>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

BarChartsSVG.propTypes = {
  data: PropTypes.object,
  increment: PropTypes.func,
  reset: PropTypes.func
}

export default BarChartsSVG
