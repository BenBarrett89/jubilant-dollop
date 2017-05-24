import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup, Col, Grid, Panel, Row, Table } from 'react-bootstrap'

import DomainConstants from '../constants/domain-constants'

class Domain extends React.Component {
  getDomainsArray () {
    return this.props.domains || []
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h2>{DomainConstants.titleText}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={2}>
            <Panel header='Count' bsStyle='primary'>
              <p>{DomainConstants.counterText}<span id={DomainConstants.valueSpanId}>{this.props.value}</span>
              </p>
              <ButtonGroup vertical block >
                <Button bsStyle='default' id={DomainConstants.incrementButtonId} onClick={() => this.props.increment()}>{DomainConstants.incrementButtonText}</Button>
                <Button bsStyle='default' id={DomainConstants.decrementButtonId} onClick={() => this.props.decrement()}>{DomainConstants.decrementButtonText}</Button>
                <Button bsStyle='warning' id={DomainConstants.resetButtonId} onClick={() => this.props.reset()}>{DomainConstants.resetButtonText}</Button>
                <Button bsStyle='info' id={DomainConstants.randomButtonId} onClick={() => this.props.random()}>{DomainConstants.randomButtonText}</Button>
                <Button bsStyle='primary' id={DomainConstants.postButtonId} onClick={() => this.props.post(this.props.value)}>{DomainConstants.postButtonText}</Button>
              </ButtonGroup>
            </Panel>
          </Col>
          <Col xs={12} md={10}>
            <Panel header='Results'>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Count</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.getDomainsArray().map((domain, key) => {
                    return (
                      <tr key={key}>
                        <td>{domain.time}</td>
                        <td>{domain.value}</td>
                        <td><Button bsStyle='danger' block id={`${DomainConstants.deleteButtonId}-${key}`} onClick={() => this.props.delete(domain.id)}>{DomainConstants.deleteButtonText}</Button></td>
                      </tr>)
                  })}
                </tbody>
              </Table>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

Domain.propTypes = {
  domains: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.number,
      time: PropTypes.string
    })
  ),
  value: PropTypes.number,
  decrement: PropTypes.func,
  delete: PropTypes.func,
  increment: PropTypes.func,
  post: PropTypes.func,
  random: PropTypes.func,
  reset: PropTypes.func
}

export default Domain
