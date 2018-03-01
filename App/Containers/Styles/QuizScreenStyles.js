import { StyleSheet, Dimensions } from 'react-native'
import { Fonts } from '../../Themes/'
const {width, height} = Dimensions.get('window')
const vh = height / 100

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginRight: 8,
    marginBottom: 30,
    marginLeft: 8,
    width: width - 16,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'column',
    position: 'relative'
  },
  flipper: {
    width: width - 16,
    height: vh * 75,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden'
  },
  flipperBack: {
    position: 'absolute',
    top: 0
  },
  title: {
    marginTop: 60,
    marginRight: 20,
    marginLeft: 20,
    alignSelf: 'center',
    color: '#000',
    fontSize: Fonts.size.h3,
    fontFamily: Fonts.type.bold
  },
  secondary: {
    marginTop: 10,
    alignSelf: 'center',
    color: '#000',
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.base,
    marginBottom: 30
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    marginTop: 20,
    marginLeft: 70,
    marginRight: 70,
    padding: 10,
    borderRadius: 8
  },
  secondaryButton: {
    alignItems: 'center',
    backgroundColor: '#000',
    marginTop: 20,
    marginLeft: 70,
    marginRight: 70,
    padding: 10,
    borderRadius: 8
  },
  buttonText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.bold
  }
})
