import {put} from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import DataActions from '../Redux/DataRedux'

// attempts to retrieve deck list
export function * retrieveDeckList () {
  try {
    // const cards = { decks: [{name: 'udacicards', cards: 3}, {name: 'new deck', cards: 0}] }
    // yield AsyncStorage.setItem('UdaciCards:deck', JSON.stringify(cards))

    const decks = yield AsyncStorage.getItem('UdaciCards:deck')
    const deckList = JSON.parse(decks)

    console.tron.display({ name: '🏡 DECK LIST 🏡', value: { 'List': deckList['decks'] } })

    yield put(DataActions.deckSuccess(deckList['decks']))
  } catch (e) {
    console.tron.display({ name: '🚫 DECK LIST 🚫', value: { 'Error': e } })
    yield put(DataActions.deckFailure(e))
  }
}