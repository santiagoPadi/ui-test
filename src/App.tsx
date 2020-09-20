import React from 'react'
import './App.css'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import HomePage from './modules/home'
import Navbar from './components/navbar'
import Footer from './components/footer'

const hist = createBrowserHistory()
function App() {
  return (
    <React.Suspense fallback="loading">
      <Router history={hist}>
        <Navbar />
        <Switch>
          <Route path={`/`} component={HomePage} exact />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </Router>
    </React.Suspense>
  )
}

export default App
