import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo'
import styles from './Styles/RoundButtonStyles'

export default function RoundButton ({ text, secondary, onPress }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={onPress}>
      <View style={styles.card}>
        <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={styles.gradient}>
          <Text style={styles.title}>{text}</Text>
          <Text style={styles.secondary}>{secondary} cards</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  )
}
