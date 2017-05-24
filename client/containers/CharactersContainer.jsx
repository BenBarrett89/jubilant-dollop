import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import { deleteCharacter, putCharacter, setResetFormFlag } from '../actions/character-actions'
import Characters from '../components/Characters.jsx'

class CharactersPage extends React.Component {
  render () {
    return (
      <div>
        <Helmet title='Characters' />
        <Characters {...this.props} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    characters: state.characters.characters,
    resetForm: state.characters.resetForm
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addCharacter: character => {
      dispatch(putCharacter(character))
    },
    deleteCharacter: id => {
      dispatch(deleteCharacter(id))
    },
    setResetForm: flag => {
      dispatch(setResetFormFlag(flag))
    }
  }
}

module.exports = {
  CharactersContainer: connect(mapStateToProps, mapDispatchToProps)(CharactersPage),
  CharactersPage
}
