import React, { ReactElement, useEffect, useState } from 'react'
import {
  CardsWrapper,
  MCard,
  MCardSpan,
  MCardSubText,
  MCardButtons,
  Button,
  Section,
  SectionTitle,
  SectionHeader,
} from '../components'

export function Home(): ReactElement {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/raulshma/1b46ef66763769719144c00ba2bab493/raw/8793009848dedbebc1ae0fdec8bb87cf9479c95c/gistfile1.txt'
    )
      .then((response) => response.text())
      .then((data) => {
        console.log(data)
        setData(JSON.parse(data))
      })
  }, [])

  return (
    <React.Fragment>
      <SectionHeader />
      <Section>
        <SectionTitle>Projects</SectionTitle>
        <CardsWrapper>
          {data &&
            data.projects.map((item: any, key: any) => (
              <MCard key={key}>
                <MCardSpan>{item.name}</MCardSpan>
                <MCardSubText>Bitcoin price tracker</MCardSubText>
                <MCardButtons>
                  <Button variant={'status'}>Preview</Button>
                </MCardButtons>
              </MCard>
            ))}

          {/* <MCard>
            <MCardSpan>BT</MCardSpan>
            <MCardSubText>Bitcoin price tracker</MCardSubText>
            <MCardButtons>
              <Button variant={'status'}>Preview</Button>
            </MCardButtons>
          </MCard>
          <MCard>
            <MCardSpan>BT</MCardSpan>
            <MCardSubText>Bitcoin price tracker</MCardSubText>
            <MCardButtons>
              <Button variant={'status'}>Preview</Button>
            </MCardButtons>
          </MCard> */}
        </CardsWrapper>
      </Section>
    </React.Fragment>
  )
}
