import React, { Component } from 'react'
import { View } from 'react-native'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer} />
    )
  }
}
