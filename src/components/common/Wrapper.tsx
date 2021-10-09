import styled from 'styled-components'
import { BG_DARK, MODE, TEXT_WHITE } from '../../helpers/constants'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${TEXT_WHITE(MODE)};
  padding: 20px 40px;
  height: 100%;
  overflow: hidden;
  background-color: ${BG_DARK(MODE)};
}`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${TEXT_WHITE('light')};
  padding: 20px 40px;
  height: 100%;
  overflow: auto;
  background-color: ${BG_DARK(MODE)};
`

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: calc(100% + 20px);
`
