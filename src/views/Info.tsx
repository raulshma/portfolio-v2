import React, { ReactElement } from 'react'
import { Heading, Text } from '../components'
export function Info(): ReactElement {
  return (
    <div className="info">
      <Heading heading="h4">Who am I?</Heading>
      <Text size="1.125rem">
        I&apos;m a full stack Web Developer, experienced in developing
        enterprise grade web applications.
      </Text>
      <Heading heading="h4">What technologies I use?</Heading>
      <Text size="1.125rem">
        I&apos;ve build applications using .NET Core, ASP.NET Core MVC, Angular,
        React.js, Node.js, Ionic, PHP and many more.
      </Text>
    </div>
  )
}
