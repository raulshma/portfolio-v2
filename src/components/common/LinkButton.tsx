import styled from 'styled-components'

export interface ButtonProps {
  variant?: 'status' | 'primary'
}

export const LinkButton = styled.a`
  text-decoration: none;
  ${(props: ButtonProps) =>
    props.variant === 'status' || props.variant === 'primary'
      ? 'font-size: 15px;'
      : ''}
  ${(props: ButtonProps) =>
    props.variant === 'primary'
      ? `background-color: rgb(53, 53, 53);`
      : 'background-color: #3a6df0;'}
  
  border: none;
  ${(props: ButtonProps) =>
    props.variant === 'status' || props.variant === 'primary'
      ? 'padding: 6px 24px;'
      : 'padding: 8px 26px;'}
  color: #fff;
  border-radius: 20px;
  ${(props: ButtonProps) =>
    props.variant === 'status' || props.variant === 'primary'
      ? 'margin-top: 0;'
      : 'margin-top: 16px;'};
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
  &:hover {
    ${(props: ButtonProps) =>
      props.variant === 'primary'
        ? `background: rgb(0, 0, 0);`
        : 'background: rgb(22, 74, 201);'}
  }
  & + & {
    margin-left: 1em;
  }
  @media only screen and (max-width: 1250px) {
    padding: 4px 14px;
  }
  @media only screen and (max-width: 1110px) {
    padding: 3px 12px;
  }
  @media only screen and (max-width: 900px) {
    padding: 2px 10px;
  }
  @media only screen and (max-width: 565px) {
    padding: 2px 8px;
  }
`
