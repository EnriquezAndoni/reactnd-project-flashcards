import React, { Component } from 'react'
import { connect } from 'react-redux'
import RowList from '../Components/RowList'
import { View } from 'react-native'

import DataActions from '../Redux/DataRedux'

class DeckListScreen extends Component {
  static navigationOptions = { index: 0, title: 'DECKS' }

  constructor () {
    super()
    this.state = {
      decks: null
    }
  }

  componentDidMount () {
    const { decks } = this.props
    if (decks === null) this.props.retrieveDeckList()
    else this.setState({decks})
  }

  componentWillReceiveProps (nextProps) {
    const { decks } = nextProps
    if (decks) this.setState({decks})
  }

  onPressDeck = (deck) => this.props.navigation.navigate('DeckScreen', { deck })

  render () {
    const { decks } = this.state
    if (decks === null) return <View />

    return (
      <RowList decks={decks} onPress={this.onPressDeck} />
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
