import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import RoundButton from './RoundButton'

export default function RowList ({ data, onPress }) {
  function renderDeckList (data) {
    const buttons = []
    data.map((element, key) => {
      buttons.push(
        <View style={{flex: 1, flexDirection: 'row'}} key={key}>
          <RoundButton
            text={element.name}
            secondary={element.cards}
            onPress={() => onPress(element)} />
        </View>
      )
    })
    return buttons
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      { renderDeckList(data) }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10
  }
})
