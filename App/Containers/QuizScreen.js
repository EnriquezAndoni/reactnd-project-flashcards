import React, { Component } from 'react'
import { connect } from 'react-redux'
import DataActions from '../Redux/DataRedux'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { clearLocalNotification, setLocalNotification } from '../Services/Helpers'
import { Ionicons } from '@expo/vector-icons'

import styles from './Styles/QuizScreenStyles'

class QuizScreen extends Component {
  static navigationOptions = { index: 1, title: 'QUIZ' }

  constructor (props) {
    super(props)
    this.state = {
      deck: null,
      current: 0,
      correct: 0,
      animatedValue: new Animated.Value(0),
      value: 0,
      frontInterpolate: null,
      backInterpolate: null
    }
  }

  componentWillMount () {
    const { animatedValue } = this.state

    animatedValue.addListener(({ value }) => {
      this.setState({ value })
    })

    const frontInterpolate = animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })

    const backInterpolate = animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })

    this.setState({ frontInterpolate, backInterpolate })
  }

  resetAnimation = () => {
    const animatedValue = new Animated.Value(0)

    animatedValue.addListener(({ value }) => {
      this.setState({ value })
    })

    const frontInterpolate = animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })

    const backInterpolate = animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })

    this.setState({ animatedValue, value: 0, frontInterpolate, backInterpolate })
  }

  flipCard = () => {
    const { animatedValue, value } = this.state
    if (value >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start()
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start()
    }
  }

  componentDidMount () {
    const { deck } = this.props
    this.setState({ deck })
  }

  correct = () => {
    this.resetAnimation()
    this.setState({ correct: this.state.correct + 1, current: this.state.current + 1 })
    clearLocalNotification()
      .then(setLocalNotification)
  }

  incorrect = () => {
    this.resetAnimation()
    this.setState({ current: this.state.current + 1 })
  }

  render () {
    const { deck, current, correct, frontInterpolate, backInterpolate } = this.state

    if (deck === null) return <View />

    if (current === deck.questions.length) {
      return (
        <View style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]}>
          <Text style={styles.secondary}>Score: {correct} of {deck.questions.length}</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('DeckListScreen')}>
            <Text style={styles.buttonText}>Back Home</Text>
          </TouchableOpacity>
        </View>
      )
    }

    const frontAnimatedStyle = {
      transform: [
        { rotateY: frontInterpolate}
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: backInterpolate }
      ]
    }

    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.flipper, frontAnimatedStyle]}>
            <Text style={styles.title}>{deck.questions[current].question}</Text>
            <Text style={styles.secondary}>{current} / {deck.questions.length}</Text>
          </Animated.View>
          <Animated.View style={[backAnimatedStyle, styles.flipper, styles.flipperBack]}>
            <Text style={styles.title}>{deck.questions[current].question}</Text>
            <Text style={styles.secondary}>{current} / {deck.questions.length}</Text>
            <TouchableOpacity style={styles.button} onPress={this.correct}>
              <Text style={styles.buttonText}> Correct </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={this.incorrect}>
              <Text style={[styles.buttonText, {color: 'white'}]}> Incorrect </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <TouchableOpacity onPress={() => this.flipCard()}>
          <View style={{alignSelf: 'center'}}>
            <Ionicons name='ios-browsers-outline' size={25} color='black' />
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen)
