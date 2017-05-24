import React from 'react'
import PropTypes from 'prop-types'
import { Col, Grid, Row } from 'react-bootstrap'

import Character from './Character.jsx'
import NewCharacter from './NewCharacter.jsx'

import CharactersConstants from '../constants/characters-constants'

class Characters extends React.Component {
  getCharacters () {
    return this.props.characters || []
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h2 id={CharactersConstants.titleId}>{CharactersConstants.titleText}</h2>
          </Col>
        </Row>
        <Row>
          {this.getCharacters().map((character, key) => {
            return (<Character key={key} character={character} delete={this.props.deleteCharacter} />)
          })}
          <NewCharacter save={this.props.addCharacter} resetForm={this.props.resetForm} setResetForm={this.props.setResetForm} />
        </Row>
      </Grid>
    )
  }
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  addCharacter: PropTypes.func,
  deleteCharacter: PropTypes.func,
  resetForm: PropTypes.bool,
  setResetFormFlag: PropTypes.func
}

export default Characters
