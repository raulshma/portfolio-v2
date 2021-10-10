import styled from 'styled-components'

export const Nav = styled.div`
  line-height: 1.15;
  font-family: var(--body-font);
  font-size: 15px;
  font-weight: 500;
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--theme-bg-color);
`
export const NavLink = styled.a`
  font-size: 15px;
  font-weight: 500;
  outline: none;
  background-color: transparent;
  text-decoration: none;
  transition: 0.3s;
  padding: 20px 24px;
  cursor: pointer;
  &:hover {
    outline-width: 0;
    color: var(--theme-color);
    border-bottom: 2px solid var(--theme-color);
  }
`
