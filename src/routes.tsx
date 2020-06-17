import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoints'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/" />
      <Route component={CreatePoint} path="/cadastro" />
    </BrowserRouter>
  )

}

export default Routes