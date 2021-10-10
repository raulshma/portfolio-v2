import styled from 'styled-components'

export const MCard = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33.3% - 20px);
  font-size: 16px;
  background-color: var(--content-bg);
  border-radius: 14px;
  border: 1px solid var(--theme-bg-color);
  padding: 20px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.02);
    background-color: var(--theme-bg-color);
  }
  @media only screen and (max-width: 1110px) {
    width: calc(50% - 20px);
  }
  @media only screen and (max-width: 565px) {
    width: calc(100% - 20px);
  }
`

export const MCardSpan = styled.span`
  display: flex;
  align-items: center;
  span {
    width: 28px;
    border-radius: 6px;
    margin-right: 12px;
    flex-shrink: 0;
  }
`

export const MCardSubText = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6em;
  word-break: break-all;
  margin-top: 20px;
  border-bottom: 1px solid rgba(113 119 144 / 25%);
  padding-bottom: 20px;
`

export const MCardButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: 16px;
`
