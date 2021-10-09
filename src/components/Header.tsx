import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { BG_DARK, BORDER_LIGHT, BORDER_WHITE } from '../helpers/constants'

const Head = styled.div`
  background-color: ${BG_DARK};
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid ${BORDER_LIGHT};
  padding: 0 30px;
  white-space: nowrap;
`
const ActionButton = styled.div`
  width: 15px;
  height: 15px;
  background-color: #f96057;
  border-radius: 35%;
  box-shadow: 24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65;
  margin-right: auto;
  flex-shrink: 0;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px 0 40px;
  margin-left: auto;
  flex-shrink: 0;
`
const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 35%;
  -o-object-fit: cover;
  object-fit: cover;
  border: 2px solid ${BORDER_WHITE};
  margin-left: 22px;
`

function Header(): ReactElement {
  return (
    <React.Fragment>
      <Head>
        <ActionButton />
        <Profile>
          <ProfileImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80" />
        </Profile>
      </Head>
    </React.Fragment>
  )
}

export default Header
