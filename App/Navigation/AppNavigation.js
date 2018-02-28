import React from 'react'
import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import DeckListScreen from '../Containers/DeckListScreen'
import DeckScreen from '../Containers/DeckScreen'
import CreateDeckScreen from '../Containers/CreateDeckScreen'
import CreateCardScreen from '../Containers/CreateCardScreen'

import { NavigationBar } from '../Components/NavigationBar'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  DeckListScreen: { screen: DeckListScreen },
  DeckScreen: { screen: DeckScreen },
  CreateDeckScreen: { screen: CreateDeckScreen },
  CreateCardScreen: { screen: CreateCardScreen }
}, {
  headerMode: 'screen',
  initialRouteName: 'DeckListScreen',
  navigationOptions: ({ navigation }) => ({
    gesturesEnabled: false,
    header: (headerProps, screenProps) => {
      return <NavigationBar navigation={navigation} headerProps={headerProps} />
    }
  })
})

export default PrimaryNav
