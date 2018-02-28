import React, { Component } from 'react'
import { connect } from 'react-redux'

import { View, Text, TouchableOpacity } from 'react-native'

import styles from './Styles/DeckScreenStyles'
import DataActions from '../Redux/DataRedux'

class DeckScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      index: 1,
      title: deck
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      id: props.navigation.state.params.deck,
      deck: null
    }
  }

  componentDidMount () {
    this.props.retrieveDeck(this.state.id)
  }

  componentWillReceiveProps (nextProps) {
    const { deck } = nextProps

    if (deck) this.setState({deck})
  }

  addCard = (deck) => this.props.navigation.navigate('DeckScreen', { deck })

  startQuiz = (deck) => this.props.navigation.navigate('DeckScreen', { deck })

  render () {
    const { deck } = this.state

    console.tron.log(deck)

    if (deck === null) return <View />

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.secondary}>{deck.questions.length} cards</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.addCard(deck)}>
          <Text style={styles.buttonText}> Add Card </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={() => this.startQuiz(deck)}>
          <Text style={[styles.buttonText, {color: 'white'}]}> Start Quiz </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    deck: state.data.deck
  }
}

const mapDispatchToProps = dispatch => {
  return {
    retrieveDeck: (id) => dispatch(DataActions.deckIdRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckScreen)
