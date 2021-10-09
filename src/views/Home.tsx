import React, { ReactElement, useEffect, useState } from 'react'
import {
  CardsWrapper,
  MCard,
  MCardSpan,
  MCardSubText,
  MCardButtons,
  LinkButton,
  Section,
  SectionTitle,
  SectionHeader,
  ContentWrapper,
} from '../components'

export interface ProjectsResponse {
  projects: Project[]
}

export interface Project {
  name: string
  description: string
  repo: string
  frameworks: string[]
  preview: Preview
}

export interface Preview {
  hasPreview: boolean
  url: string
}

export function Home(): ReactElement {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/raulshma/1b46ef66763769719144c00ba2bab493/raw'
    )
      .then((response: Response) => response.text())
      .then((data: string) => {
        const response: ProjectsResponse = JSON.parse(data)
        setProjects(response.projects)
      })
  }, [])

  return (
    <React.Fragment>
      <SectionHeader />
      <Section>
        <SectionTitle>Projects</SectionTitle>
        <CardsWrapper>
          {projects.length > 0 &&
            projects.map((item: Project) => (
              <MCard key={item.name}>
                <MCardSpan>{item.name}</MCardSpan>
                <MCardSubText>{item.description}</MCardSubText>
                <MCardButtons>
                  <LinkButton
                    href={item.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={'primary'}
                  >
                    Github
                  </LinkButton>
                  {item.preview.hasPreview && (
                    <LinkButton
                      href={item.preview.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant={'status'}
                    >
                      Preview
                    </LinkButton>
                  )}
                </MCardButtons>
              </MCard>
            ))}
        </CardsWrapper>
      </Section>
    </React.Fragment>
  )
}
