import styled from 'styled-components'
import { BTN_PRIMARY, BTN_PRIMARY_HOVER } from '../../helpers/constants'

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
      ? `background-color:${BTN_PRIMARY};`
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
        ? `background:${BTN_PRIMARY_HOVER};`
        : 'background: rgb(22, 74, 201);'}
  }
  & + & {
    margin-left: 1em;
  }
  @media only screen and (max-width: 1110px) {
    padding: 4px 16px;
  }
  @media only screen and (max-width: 565px) {
    padding: 3px 12px;
  }
`
