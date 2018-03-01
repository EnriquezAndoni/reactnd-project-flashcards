import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350
// const guidelineBaseHeight = 680

const scale = size => width / guidelineBaseWidth * size
// const scaleVertical = size => height / guidelineBaseHeight * size
// const scaleModerate = (size, factor = 0.5) => size + (scale(size) - size) * factor

const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height === 812 || width === 812)

export default {
  scale,
  // scaleVertical,
  // scaleModerate,
  isIphoneX
}
