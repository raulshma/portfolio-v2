import React, { ReactElement, useState } from 'react'
import { Container, ContentWrapper, ThemeSwitch } from './components'
import Header from './components/Header'
import { Info } from './views'
import { Home } from './views/Home'

function App(): ReactElement {
  const [activeTab, setActiveTab] = useState<'Info' | 'Projects'>('Info')
  return (
    <Container>
      <ThemeSwitch />
      <Header active={activeTab} setActive={setActiveTab} />
      <ContentWrapper>
        {activeTab === 'Info' ? <Info /> : <Home />}
      </ContentWrapper>
    </Container>
  )
}

export default App
