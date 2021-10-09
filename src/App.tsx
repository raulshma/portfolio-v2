import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, ContentWrapper } from './components'
import Header from './components/Header'
import { Home } from './views/Home'

function App(): ReactElement {
  return (
    <Router>
      <Container>
        <Header />
        <ContentWrapper>
          <Switch>
            <Route path="/about"></Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </ContentWrapper>
      </Container>
    </Router>
  )
}

export default App
