import { createStore } from 'redux'

import rootReducer from './reducer'

const store = createStore(rootReducer)


store.subscribe(() => {
    console.log("== store 1:", store.getState())
})

export default store