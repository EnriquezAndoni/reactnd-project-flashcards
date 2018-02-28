import React, { Component } from 'react'
import { connect } from 'react-redux'
import DataActions from '../Redux/DataRedux'
import { View, Text, TouchableOpacity } from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../Services/Helpers'

import styles from './Styles/QuizScreenStyles'

class QuizScreen extends Component {
  static navigationOptions = { index: 1, title: 'QUIZ' }

  constructor (props) {
    super(props)
    this.state = {
      deck: null,
      view: 'front',
      current: 0,
      correct: 0
    }
  }

  componentDidMount () {
    const { deck } = this.props
    this.setState({ deck })
  }

  flip = () => {
    const { view } = this.state
    if (view === 'front') this.setState({ view: 'back' })
    else this.setState({ view: 'front' })
  }

  correct = () => {
    this.setState({ correct: this.state.correct + 1, current: this.state.current + 1, view: 'front' })
    clearLocalNotification()
      .then(setLocalNotification)
  }

  incorrect = () => {
    this.setState({ current: this.state.current + 1, view: 'front' })
  }

  render () {
    const { deck, current, view, correct } = this.state

    if (deck === null) return <View />

    if (current === deck.questions.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.secondary}>Score: {correct} of {deck.questions.length}</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('DeckListScreen')}>
            <Text style={styles.buttonText}>Back Home</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        {view === 'front'
          ? <View>
            <Text style={styles.title}>{deck.questions[current].question}</Text>
            <Text style={styles.secondary}>{current} / {deck.questions.length}</Text>
            <TouchableOpacity onPress={this.flip}>
              <Text style={styles.secondary}>Flip</Text>
            </TouchableOpacity>
          </View>
          : <View>
            <Text style={styles.title}>{deck.questions[current].answer}</Text>
            <Text style={styles.secondary}>{current} / {deck.questions.length}</Text>
            <TouchableOpacity onPress={this.flip}>
              <Text style={styles.secondary}>Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this.correct}>
              <Text style={styles.buttonText}> Correct </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={this.incorrect}>
              <Text style={[styles.buttonText, {color: 'white'}]}> Incorrect </Text>
            </TouchableOpacity>
          </View>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen)
