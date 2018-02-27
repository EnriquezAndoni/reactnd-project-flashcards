import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import RoundButton from './RoundButton'

export default function RowList ({ data, onPress }) {
  function renderDeckList (data) {
    const buttons = []
    data.map((element, key) => {
      console.tron.log(element)
      buttons.push(
        <View style={{flex: 1, flexDirection: 'row'}} key={key}>
          <RoundButton
            text={element.name}
            secondary={element.cards}
            onPress={() => onPress} />
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
    paddingTop: 40
  }
})
