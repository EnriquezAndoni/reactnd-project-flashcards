import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import RoundButton from './RoundButton'

export default function RowList ({ decks, onPress }) {
  function renderDeckList (decks) {
    const buttons = []
    for (let key in decks) {
      buttons.push(
        <View style={{flex: 1, flexDirection: 'row'}} key={key}>
          <RoundButton
            text={decks[key].title}
            secondary={decks[key].questions.length}
            onPress={() => onPress(key)} />
        </View>
        )
    }
    return buttons
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      { renderDeckList(decks) }
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
