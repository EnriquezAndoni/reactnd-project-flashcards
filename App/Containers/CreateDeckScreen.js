import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import DataActions from '../Redux/DataRedux'

import styles from './Styles/CreateDeckScreenStyles'

class CreateDeckScreen extends Component {
  static navigationOptions = { index: 1, title: 'NEW DECK' }

  constructor () {
    super()
    this.state = {
      title: ''
    }
  }

  submit = () => {
    const { title } = this.state
    if (title !== null && title !== '') {
      this.props.addDeck(title)
    } else {
      Alert.alert('Please enter a title')
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(title) => this.setState({title})}
          placeholder='Insert the new title'
          value={this.state.title}
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
    addDeck: (title) => dispatch(DataActions.addDeckRequest(title))
  }
}

export default connect(null, mapDispatchToProps)(CreateDeckScreen)
