import React, { useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Navbar from './components/navbar'
import Footer from './components/footer'
import capitalize, { isNil } from './helpers'
import defaultValues from './data/rulings-votes'
import { pages } from './routes'

const hist = createBrowserHistory()
function App() {
  const route: string = window.location.pathname
    .replace(/\//, '')
    .replace(/\//g, '.')
    .split('.')[0]
  document.title = `ui-test ${route !== undefined ? capitalize(route).replace(/-/g, ' ') : ''}`
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
          {pages.map(page => (
            <Route key={page.path} path={page.path} component={page.component} exact />
          ))}
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </Router>
    </React.Suspense>
  )
}

export default App
