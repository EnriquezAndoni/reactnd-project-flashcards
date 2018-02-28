import React, { Component } from 'react'
import { connect } from 'react-redux'

import { View, Text, TouchableOpacity } from 'react-native'

import styles from './Styles/DeckScreenStyles'

class DeckScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      index: 1,
      title: deck.name
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      deck: props.navigation.state.params.deck
    }
  }

  componentDidMount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  addCard = (deck) => this.props.navigation.navigate('DeckScreen', { deck })

  startQuiz = (deck) => this.props.navigation.navigate('DeckScreen', { deck })

  render () {
    const { deck } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.name}</Text>
        <Text style={styles.secondary}>{deck.cards} cards</Text>
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
    //
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckScreen)
