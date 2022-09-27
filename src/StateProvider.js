import { createContext, useReducer } from 'react'

export const StateContext = createContext()
export const StatePrrovider = ({ reducer, initalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)
