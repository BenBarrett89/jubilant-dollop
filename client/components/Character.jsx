import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, Button, ButtonGroup, Col, Panel } from 'react-bootstrap'

class Character extends React.Component {
  render () {
    return (
      <Col xs={12} sm={6} md={4}>
        <Panel header={this.props.character.name} bsStyle='primary'>
          <Accordion defaultActiveKey='1'>
            <Panel header='Description' eventKey='1'>
              <p>{this.props.character.description}</p>
              <Button bsStyle='primary' bsSize='xsmall' style={{'float': 'right'}} onClick={() => console.log('Do the edit')}>Edit</Button>
            </Panel>
            <Panel header='Motivation' eventKey='2'>
              <p>{this.props.character.motivation}</p>
              <Button bsStyle='primary' bsSize='xsmall' style={{'float': 'right'}} onClick={() => console.log('Do the edit')}>Edit</Button>
            </Panel>
            <Panel header='Goal' eventKey='3'>
              <p>{this.props.character.goal}</p>
              <Button bsStyle='primary' bsSize='xsmall' style={{'float': 'right'}} onClick={() => console.log('Do the edit')}>Edit</Button>
            </Panel>
            <Panel header='Conflict' eventKey='4'>
              <p>{this.props.character.conflict}</p>
              <Button bsStyle='primary' bsSize='xsmall' style={{'float': 'right'}} onClick={() => console.log('Do the edit')}>Edit</Button>
            </Panel>
            <Panel header='Epiphany' eventKey='5'>
              <p>{this.props.character.epiphany}</p>
              <Button bsStyle='primary' bsSize='xsmall' style={{'float': 'right'}} onClick={() => console.log('Do the edit')}>Edit</Button>
            </Panel>
            <Panel header='Relationships' eventKey='6'>
              <p>Need to let characters have these but needs new store schema</p>
            </Panel>
          </Accordion>
          <ButtonGroup style={{'float': 'right'}}>
            <Button bsStyle='primary' bsSize='small'onClick={() => console.log('Do the edit')}>Edit</Button>
            <Button bsStyle='danger' bsSize='small' onClick={() => this.props.delete(this.props.character.id)}>Delete</Button>
          </ButtonGroup>
        </Panel>
      </Col>
    )
  }
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.description
  }),
  delete: PropTypes.func
}

export default Character
