import React from 'react'
import PropTypes from 'prop-types'
import { Accordion, Button, ButtonGroup, Col, FormControl, FormGroup, Panel } from 'react-bootstrap'

class NewCharacter extends React.Component {
  constructor (props) {
    super(props)
    // bind 'this' into handleSubmit or we won't be able to use this.props there
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount () {
    this.submission = {}
  }

  componentDidUpdate () {
    if (this.props.resetForm) {
      document.getElementById('newCharacter').reset()
      this.props.setResetForm(false)
    }
  }

  handleSubmit (event) {
    // stop the form submission as this will refresh the page
    event.preventDefault()
    // get the form elements into a submittable state (react-bootstrap doesn't make this easy...)
    const formElements = document.getElementById('newCharacter').elements
    const submission = Object.keys(formElements)
      .filter(formElementKey => !formElementKey.includes('newCharacter'))
      .map(key => {
        return {
          name: formElements[key].dataset.name,
          value: formElements[key].value
        }
      })
      .reduce((submissionObject, item) => {
        if (item.name) submissionObject[item.name] = item.value
        return submissionObject
      }, {})
    // do the action call to do the save
    this.props.save(submission)
  }

  render () {
    return (
      <Col xs={12} sm={6} md={4}>
        <form id='newCharacter' onSubmit={this.handleSubmit}>
          <Panel header='New Character' bsStyle='info'>
            <Accordion defaultActiveKey='1'>
              <Panel header='Description' eventKey='1'>
                <FormGroup controlId='newCharacterName'>
                  <FormControl type='text' label='Name' data-name='name' placeholder='Enter the name of the character' />
                </FormGroup>
                <FormGroup controlId='newCharacterDescription'>
                  <FormControl componentClass='textarea' data-name='description' style={{'resize': 'vertical'}} placeholder='Overall description of the character' />
                </FormGroup>
              </Panel>
              <Panel header='Motivation' eventKey='2'>
                <FormGroup controlId='newCharacterMotivation'>
                  <FormControl componentClass='textarea' data-name='motivation' style={{'resize': 'vertical'}} placeholder='The things that motivate the character to act' />
                </FormGroup>
              </Panel>
              <Panel header='Goal' eventKey='3'>
                <FormGroup controlId='newCharacterGoals'>
                  <FormControl componentClass='textarea' data-name='goal' style={{'resize': 'vertical'}} placeholder='The goals of the character' />
                </FormGroup>
              </Panel>
              <Panel header='Conflict' eventKey='4'>
                <FormGroup controlId='newCharacterConflict'>
                  <FormControl componentClass='textarea' data-name='conflict' style={{'resize': 'vertical'}} placeholder='Conflicts that the character faces' />
                </FormGroup>
              </Panel>
              <Panel header='Epiphany' eventKey='5'>
                <FormGroup controlId='newCharacterEpiphany'>
                  <FormControl componentClass='textarea' data-name='epiphany' style={{'resize': 'vertical'}} placeholder='Epiphanies that the character reaches that lead to growth' />
                </FormGroup>
              </Panel>
              <Panel header='Relationships' eventKey='6'>
                <p>Need to let characters have these but needs new store schema</p>
              </Panel>
            </Accordion>
            <ButtonGroup style={{'float': 'right'}}>
              <Button bsStyle='info' bsSize='small' type='submit'>Save</Button>
            </ButtonGroup>
          </Panel>
        </form>
      </Col>
    )
  }
}

NewCharacter.propTypes = {
  resetForm: PropTypes.bool,
  save: PropTypes.func,
  setResetForm: PropTypes.func
}

export default NewCharacter
