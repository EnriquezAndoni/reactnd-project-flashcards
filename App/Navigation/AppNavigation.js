import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import DeckListScreen from '../Containers/DeckListScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  DeckListScreen: { screen: DeckListScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'DeckListScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
