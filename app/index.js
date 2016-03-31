import './main.css'
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, compose } from 'redux'
import rootReducer from './dux'
import { Provider } from 'react-redux'
import DevTools from './components/DevTools'
import storage from './lib/storage'

const createStoreWithMiddleware = compose(
  DevTools.instrument()
)(createStore)

const APP_STORAGE = "MY_KANBAN_APP"
const initialState = storage.get(APP_STORAGE) || {}
const store = createStoreWithMiddleware(rootReducer, initialState)
store.subscribe(() => storage.set(APP_STORAGE, store.getState()))



ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
)
