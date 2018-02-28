import React, { Component } from 'react'

import {
  View,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import styles from './Styles/NavigationBarStyles'

export class NavigationBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      width: undefined,
      index: []
    }
  }

  renderRight (headerRight) {
    let windowWidth = Dimensions.get('window').width
    const width = this.state.width
      ? (windowWidth - this.state.width) / 2
      : undefined

    return headerRight && (
      <View style={[{width}, styles.right]}>{headerRight}</View>
    )
  }

  renderLeft (headerLeft) {
    if (headerLeft) {
      return (
        <View style={styles.left}>{headerLeft}</View>
      )
    }

    let windowWidth = Dimensions.get('window').width
    const width = this.state.width
      ? (windowWidth - this.state.width) / 2
      : undefined

    let renderLeftContent = () => {
      let headerProps = this.props.headerProps.getScreenDetails(this.props.headerProps.scene)
      let index = headerProps.options.index

      if (index > 0) {
        return (
          <TouchableOpacity
            style={styles.menu}
            onPress={() => this.props.navigation.goBack()}>
            <Ionicons name='ios-arrow-round-back-outline' size={25} color='black' />
          </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity
            style={styles.menu}
            onPress={() => this.props.navigation.navigate('CreateDeckScreen')}>
            <Ionicons name='ios-add-outline' size={25} color='black' />
          </TouchableOpacity>
        )
      }
    }

    return (
      <View style={[{width}, styles.left]}>
        {renderLeftContent()}
      </View>
    )
  }

  renderTitle (title) {
    if (title) {
      return (
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>)
    }
  }

  render () {
    let options = this.props.headerProps.getScreenDetails(this.props.headerProps.scene).options
    return (
      <View>
        <View style={styles.layout}>
          <View style={styles.container}>
            {this.renderTitle(options.title)}
            {this.renderLeft(options.headerLeft)}
            {this.renderRight(options.headerRight)}
          </View>
        </View>
      </View>
    )
  }
}
