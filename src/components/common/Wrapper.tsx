import styled from 'styled-components'
import { BG_DARK, TEXT_WHITE } from '../../helpers/constants'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${TEXT_WHITE};
  padding: 20px 40px;
  height: 100%;
  overflow: hidden;
  background-color: ${BG_DARK};
}`

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% + 20px);
`
