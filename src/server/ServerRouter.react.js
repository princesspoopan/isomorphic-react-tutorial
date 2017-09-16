import IndexPage from '../components/IndexPage.react'
import Layout from '../components/Layout.react'
import React from 'react'
import { StaticRouter } from 'react-router'

module.exports = function ServerRouter (url) {
  return (
    <StaticRouter>
      <Layout>
        <IndexPage />
      </Layout>
    </StaticRouter>
  )
}
