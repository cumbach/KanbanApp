import './main.css'
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, compose } from 'redux'
import rootReducer from './dux'
import { Provider } from 'react-redux'
import DevTools from './components/DevTools'

const createStoreWithMiddleware = compose(
  DevTools.instrument()
)(createStore)

const initialState = {}
const store = createStoreWithMiddleware(rootReducer, initialState)



ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
)
