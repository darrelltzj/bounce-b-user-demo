import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import history from './history'

import Navbar from './components/partials/Navbar'
import HomePage from './containers/HomePage'
import Info from './containers/Info'
import Shop from './containers/Shop'
import Directory from './containers/Directory'
import Company from './containers/Company'
import Profile from './containers/Profile'
import ProfileEdit from './containers/ProfileEdit'
import Product from './containers/Product'
import Article from './containers/Article'
import NotFoundPage from './containers/NotFoundPage'

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <main>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/info' component={Info} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/directory' component={Directory} />
          <Route exact path='/companies/:companyId' component={Company} />
          <Route exact path='/profiles/:profileId/edit' component={ProfileEdit} />
          <Route exact path='/profiles/:profileId' component={Profile} />
          <Route exact path='/products/:productId' component={Product} />
          <Route exact path='/articles/:articleId' component={Article} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </main>
    </ConnectedRouter>
  )
}

export default Routes
