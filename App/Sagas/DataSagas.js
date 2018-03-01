import {put, call} from 'redux-saga/effects'
import DataActions from '../Redux/DataRedux'
import {initializeStorage, getDecks, getDeck, saveDeckTitle, addCardToDeck} from '../Services/AsyncStorage'
import { NavigationActions } from 'react-navigation'

// attempts to retrieve deck list
export function * retrieveDeckList () {
  try {
    let decks = yield getDecks()

    if (decks === null) {
      decks = yield initializeStorage()
    }

    console.tron.display({ name: '🏡 DECK LIST 🏡', value: { 'Decks': JSON.parse(decks) } })

    yield put(DataActions.deckSuccess(JSON.parse(decks)))
  } catch (e) {
    console.tron.display({ name: '🚫 DECK LIST 🚫', value: { 'Error': e } })
    yield put(DataActions.deckFailure(e))
  }
}

export function * retrieveDeck ({id}) {
  try {
    const deck = yield getDeck(id)
    console.tron.display({ name: '🔥 DECK 🔥', value: { 'Deck': deck } })

    yield put(DataActions.deckIdSuccess(deck))
  } catch (e) {
    console.tron.display({ name: '🚫 DECK 🚫', value: { 'Error': e } })
    yield put(DataActions.deckIdFailure(e))
  }
}

export function * addDeck ({title}) {
  try {
    const decks = yield saveDeckTitle(title)

    console.tron.display({ name: '🚀 ADD DECK 🚀', value: { 'Decks': JSON.parse(decks) } })

    yield put(DataActions.addDeckSuccess(JSON.parse(decks)))
    yield put(NavigationActions.navigate({ routeName: 'DeckListScreen' }))
  } catch (e) {
    console.tron.display({ name: '🚫 ADD DECK 🚫', value: { 'Error': e } })
    yield put(DataActions.addDeckFailure(e))
  }
}

export function * addCard ({title, card}) {
  try {
    const decks = yield addCardToDeck(title, card)
    console.tron.log(decks)

    console.tron.display({ name: '🚀 ADD CARD 🚀', value: { 'Decks': JSON.parse(decks) } })

    yield put(DataActions.addDeckSuccess(JSON.parse(decks)))
    yield call(retrieveDeck, {id: title})
  } catch (e) {
    console.tron.display({ name: '🚫 ADD CARD 🚫', value: { 'Error': e } })
    yield put(DataActions.addDeckFailure(e))
  }
}
