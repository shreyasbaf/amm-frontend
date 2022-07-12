import styled from "styled-components"
import { colors } from "../../styles/theme"

interface TickerContainerProps {
  onChange?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const TokenContainer = styled.div<TickerContainerProps>`
  display: flex;
  margin: 12px 16px;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(47, 57, 74, 0.5);
  :hover {
    background: rgb(65, 76, 94);
  }
`

interface ModalListWrapperProps {
  position?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
}

export const ModalListWrapper = styled.div<ModalListWrapperProps>`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
`
export const SelectorButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  background: ${colors.actionInfo};
  height: 3.5rem;
  width: 8rem;
  padding: 0rem 1rem;
  border-radius: 0px 0.3rem 0.3rem 0px;
`
