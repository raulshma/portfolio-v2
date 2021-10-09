import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Wrapper } from './components'
import Header from './components/Header'
import { Home } from './views/Home'

function App(): ReactElement {
  return (
    <Router>
      <Container>
        <Header />
        <Wrapper>
          <Switch>
            <Route path="/about"></Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </Wrapper>
      </Container>
    </Router>
  )
}

export default App
