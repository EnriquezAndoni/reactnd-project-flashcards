import { Platform, StyleSheet, Dimensions } from 'react-native'
import {Fonts, Scale} from '../../Themes'
const { width } = Dimensions.get('window')

export default StyleSheet.create({
  layout: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? Scale.isIphoneX ? 50 : 20 : 0
  },
  container: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 44 : 56
  },
  left: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  },
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  },
  title: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menu: {
    width: 100,
    height: 50,
    marginLeft: 20,
    marginTop: 30
  },
  image: {
    width: width / 3,
    height: 30
  },
  titleText: {
    color: '#000',
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.bold
  }
})
