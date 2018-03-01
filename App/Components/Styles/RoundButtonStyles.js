import { StyleSheet, Dimensions } from 'react-native'
import { Fonts } from '../../Themes/'
const {width, height} = Dimensions.get('window')
const vh = height / 100

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 4,
    marginRight: 8,
    marginBottom: 8,
    marginLeft: 8,
    width: width - 16,
    shadowColor: '#000',
    height: vh * 10,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'column',
    position: 'relative'
  },
  card: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  gradient: {
    padding: 16,
    borderRadius: 8,
    height: (vh * 30) * (1.75 / 3)
  },
  title: {
    color: '#fff',
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.bold
  },
  secondary: {
    color: '#fff',
    alignSelf: 'flex-end',
    fontSize: 16,
    fontFamily: Fonts.type.base
  }
})
