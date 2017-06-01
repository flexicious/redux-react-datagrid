import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterApp from './reducer'
import Counter from './Counter'

let store = createStore(counterApp)

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)