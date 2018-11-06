import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import fuelSavings from './fuelSavingsReducer'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  fuelSavings
})

export default createRootReducer
