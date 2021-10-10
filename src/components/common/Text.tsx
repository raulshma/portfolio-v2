import styled from 'styled-components'

type TextProps = {
  size?: string
}

export const Text = styled.p`
  color: var(--theme-color-light);
  outline: none;
  font-size: ${(props: TextProps) => (props.size ? props.size : '14px')};
  font-weight: 400;
  line-height: 1.2em;
  margin-top: 20px;
  padding-bottom: 20px;
  letter-spacing: 1.125px;
  @media only screen and (max-width: 900px) {
    font-size: 1.125em;
  }
  @media only screen and (max-width: 565px) {
    font-size: 1em;
  }
`
