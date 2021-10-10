import React, { ReactElement } from 'react'
import styled from 'styled-components'

const SwitchContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 30px;
  background-color: var(--dropdown-bg);
  box-shadow: -1px 3px 8px -1px rgb(0 0 0 / 20%);
  padding: 8px;
  border-radius: 50%;
  z-index: 3;
  cursor: pointer;
`
export function ThemeSwitch(): ReactElement {
  const [isDark, setIsDark] = React.useState<boolean>(true)

  const changeTheme = (dark: boolean): void => {
    if (dark === true) {
      document.body.classList.remove('dark-mode')
      document.body.classList.add('light-mode')
      setIsDark(false)
    } else {
      document.body.classList.remove('light-mode')
      document.body.classList.add('dark-mode')
      setIsDark(true)
    }
  }

  return (
    <SwitchContainer className="dark-light" onClick={() => changeTheme(isDark)}>
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
      </svg>
    </SwitchContainer>
  )
}
