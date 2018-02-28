import {put} from 'redux-saga/effects'
import DataActions from '../Redux/DataRedux'
import {getDecks, getDeck, initializeStorage, saveDeckTitle} from '../Services/AsyncStorage'

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
  } catch (e) {
    console.tron.display({ name: '🚫 ADD DECK 🚫', value: { 'Error': e } })
    yield put(DataActions.addDeckFailure(e))
  }
}
