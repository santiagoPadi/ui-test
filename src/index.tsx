import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './state'
import { StoreProvider } from 'easy-peasy'

ReactDOM.render(
  <PersistGate loading={<div>Loading</div>} persistor={persistor}>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </PersistGate>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
