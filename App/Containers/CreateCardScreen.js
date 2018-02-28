import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import DataActions from '../Redux/DataRedux'

import styles from './Styles/CreateDeckScreenStyles'

class CreateCardScreen extends Component {
  static navigationOptions = { index: 1, title: 'ADD CARD' }

  constructor (props) {
    super(props)
    this.state = {
      question: '',
      answer: '',
      title: props.navigation.state.params.deck
    }
  }

  submit = () => {
    const { question, answer, title } = this.state
    if (question !== null && question !== '' && answer !== null && answer !== '') {
      this.props.addCard(title, {question, answer})
      this.setState({ question: '', answer: '' })
      Alert.alert('Card added')
    } else {
      Alert.alert('Please enter a correct question and answer')
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(question) => this.setState({question})}
          placeholder='Insert the new question'
          value={this.state.question}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(answer) => this.setState({answer})}
          placeholder='Insert the answer'
          value={this.state.answer}
        />
        <TouchableOpacity style={styles.button} onPress={this.submit}>
          <Text style={[styles.buttonText, {color: 'white'}]}> Submit </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCard: (title, card) => dispatch(DataActions.addCardRequest(title, card))
  }
}

export default connect(null, mapDispatchToProps)(CreateCardScreen)
