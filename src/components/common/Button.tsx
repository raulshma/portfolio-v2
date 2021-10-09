import styled from 'styled-components'

export interface ButtonProps {
  variant: 'status'
}

export const Button = styled.button`
  ${(props: ButtonProps) =>
    props.variant === 'status' ? 'font-size: 15px;' : ''}
  background-color: #3a6df0;
  border: none;
  ${(props: ButtonProps) =>
    props.variant === 'status' ? 'padding: 6px 24px;' : 'padding: 8px 26px;'}
  color: #fff;
  border-radius: 20px;
  ${(props: ButtonProps) =>
    props.variant === 'status' ? 'margin-top: 0;' : 'margin-top: 16px;'};
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
  &:hover {
    background: #1e59f1;
  }
`
