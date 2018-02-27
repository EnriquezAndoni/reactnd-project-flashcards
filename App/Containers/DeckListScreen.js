import React, { Component } from 'react'
import { connect } from 'react-redux'
import RowList from '../Components/RowList'

import DataActions from '../Redux/DataRedux'

class DeckListScreen extends Component {
  constructor () {
    super()
    this.state = {
      decks: []
    }
  }

  componentDidMount () {
    const { decks } = this.props

    if (decks.length !== 0) this.setState({decks})
    else this.props.retrieveDeckList()
  }

  componentWillReceiveProps (nextProps) {
    const { decks } = nextProps

    if (decks) this.setState({decks})
  }

  render () {
    const { decks } = this.state

    return (
      <RowList data={decks} />
    )
  }
}

const mapStateToProps = state => {
  return {
    decks: state.data.decks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    retrieveDeckList: () => dispatch(DataActions.deckRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListScreen)
