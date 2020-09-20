import React, { useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import HomePage from './modules/home'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { isNil } from './helpers'
import defaultValues from './data/rulings-votes'

const hist = createBrowserHistory()
function App() {
  useEffect(() => {
    const _storage = localStorage.getItem('votes')
    if (isNil(_storage)) {
      localStorage.setItem('votes', JSON.stringify(defaultValues))
    }
  }, [])
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
