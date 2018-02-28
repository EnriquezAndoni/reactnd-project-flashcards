import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  deckRequest: null,
  deckSuccess: ['decks'],
  deckFailure: ['error'],
  deckIdRequest: ['id'],
  deckIdSuccess: ['deck'],
  deckIdFailure: ['error'],
  addDeckRequest: ['title'],
  addDeckSuccess: ['decks'],
  addDeckFailure: ['error']
})

export const DataTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  decks: null,
  deck: null
})

/* ------------- Reducers ------------- */

export const deckRequest = (state) => state.merge({ fetching: true })

export const deckSuccess = (state, { decks }) => state.merge({ fetching: false, error: null, decks })

export const deckFailure = (state, { error }) => state.merge({ fetching: false, error })

export const deckIdRequest = (state) => state.merge({ fetching: true })

export const deckIdSuccess = (state, { deck }) => state.merge({ fetching: false, error: null, deck })

export const deckIdFailure = (state, { error }) => state.merge({ fetching: false, error })

export const addDeckRequest = (state) => state.merge({ fetching: true })

export const addDeckSuccess = (state, { decks }) => state.merge({ fetching: false, error: null, decks })

export const addDeckFailure = (state, { error }) => state.merge({ fetching: false, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DECK_REQUEST]: deckRequest,
  [Types.DECK_SUCCESS]: deckSuccess,
  [Types.DECK_FAILURE]: deckFailure,
  [Types.DECK_ID_REQUEST]: deckIdRequest,
  [Types.DECK_ID_SUCCESS]: deckIdSuccess,
  [Types.DECK_ID_FAILURE]: deckIdFailure,
  [Types.ADD_DECK_REQUEST]: addDeckRequest,
  [Types.ADD_DECK_SUCCESS]: addDeckSuccess,
  [Types.ADD_DECK_FAILURE]: addDeckFailure
})
