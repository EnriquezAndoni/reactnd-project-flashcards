import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  deckRequest: null,
  deckSuccess: ['decks'],
  deckFailure: ['error']
})

export const DataTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  decks: []
})

/* ------------- Reducers ------------- */

// we're attempting to request the content
export const deckRequest = (state) => state.merge({ fetching: true })

// update the state with the received content
export const deckSuccess = (state, { decks }) => state.merge({ fetching: false, error: null, decks })

// there retrieve content request failed
export const deckFailure = (state, { error }) => state.merge({ fetching: false, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DECK_REQUEST]: deckRequest,
  [Types.DECK_SUCCESS]: deckSuccess,
  [Types.DECK_FAILURE]: deckFailure
})
