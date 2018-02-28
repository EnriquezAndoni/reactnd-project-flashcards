// process STARTUP actions
import { AsyncStorage } from 'react-native'

export function * startup (action) {
  if (__DEV__ && console.tron) {
    console.tron.display({
      name: '🔥 STARTUP 🔥',
      preview: '👾 UdaciCards 👾',
      value: {
        '🚀': 'UdaciCards initialization!'
      }
    })
  }

  const decks = yield AsyncStorage.getItem('UdaciCards:deck')
  if (decks === null) {
    const decks = {decks: [
      {name: 'udacicards',
        cards: 2,
        questions: [
            {title: 'Is udacity the best place to learn?', answer: true},
            {title: 'Is Andoni the best student?', answer: false}
        ]},
        {name: 'new deck', cards: 0}
    ]}
    yield AsyncStorage.setItem('UdaciCards:deck', JSON.stringify(decks))
  }
}
