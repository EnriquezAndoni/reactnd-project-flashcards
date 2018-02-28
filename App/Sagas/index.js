import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { DataTypes } from '../Redux/DataRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { retrieveDeckList, addDeck } from './DataSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(DataTypes.DECK_REQUEST, retrieveDeckList),
    takeLatest(DataTypes.ADD_DECK_REQUEST, addDeck)
  ])
}
