import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import Error404Page from './components/Error404Page.react'
import IndexPage from './components/IndexPage.react'
import KittenPage from './components/KittenPage.react'
import Layout from './components/Layout.react'
import React from 'react'

export default class AppRoutes extends React.Component {
  render () {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={IndexPage} />
            <Route path='/kittens/:name' exact component={KittenPage} />
            <Route component={Error404Page} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}
