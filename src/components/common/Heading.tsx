import styled from 'styled-components'

type HeadingProps = {
  heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}

export const Heading = styled.h1`
  color: var(--theme-color);
  outline: none;
  font-size: ${(props: HeadingProps) => {
    if (props.heading)
      switch (props.heading) {
        case 'h1':
          return '2rem;'
        case 'h2':
          return '1.75rem;'
        case 'h3':
          return '1.525reml;'
        case 'h4':
          return '1.25rem;'
        case 'h5':
          return '1rem'
      }
    return '1rem;'
  }};
  font-weight: 500;
  line-height: 1.6em;
  margin-top: 10px;
`
