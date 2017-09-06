import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from './history'

import Navbar from './components/partials/Navbar'
import HomePage from './containers/HomePage'
import Dashboard from './containers/Dashboard'
import NotFoundPage from './containers/NotFoundPage'

class Routes extends Component {
  render () {
    return (
      <ConnectedRouter history={history}>
        <main>
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route path='*' component={NotFoundPage} />
          </Switch>
        </main>
      </ConnectedRouter>
    )
  }
}

export default Routes
