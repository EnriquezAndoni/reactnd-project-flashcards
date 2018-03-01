import { AsyncStorage } from 'react-native'

const DECK_STORAGE = '@UdaciCards:deck'

export function initializeStorage () {
  const init = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

  return AsyncStorage.setItem(DECK_STORAGE, JSON.stringify(init)).then(() => AsyncStorage.getItem(DECK_STORAGE))
}

export function getDecks () {
  return AsyncStorage.getItem(DECK_STORAGE)
}

export function getDeck (id) {
  return AsyncStorage.getItem(DECK_STORAGE).then(JSON.parse).then(decks => decks[id])
}

export function saveDeckTitle (title) {
  return AsyncStorage.getItem(DECK_STORAGE).then(JSON.parse).then(decks => {
    decks[title] = { title, questions: [] }
    return AsyncStorage.setItem(DECK_STORAGE, JSON.stringify(decks)).then(() => AsyncStorage.getItem(DECK_STORAGE))
  })
}

export function addCardToDeck (title, card) {
  console.tron.log(title)
  console.tron.log(card)
  return AsyncStorage.getItem(DECK_STORAGE).then(JSON.parse).then(decks => {
    console.tron.log(decks[title])
    decks[title].questions.push(card)
    return AsyncStorage.setItem(DECK_STORAGE, JSON.stringify(decks)).then(() => AsyncStorage.getItem(DECK_STORAGE))
  })
}
