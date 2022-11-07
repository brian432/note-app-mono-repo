import { combineReducers } from 'redux'
import { registerReducer } from './registerReducer'
import { loginReducer } from './loginReducer'
import { notesReducer } from './notesReducer'

const rootReducers = combineReducers({
    registerReducer,
    loginReducer,
    notesReducer
})

export default rootReducers