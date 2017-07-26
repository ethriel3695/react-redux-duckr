import React from 'react'
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainContainer, HomeContainer } from 'containers'

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={MainContainer} />
      <Route exact path ='/' component={HomeContainer} />
      <Route path ='/error' component={HomeContainer} />
    </div>
  </BrowserRouter>
)

export default routes
