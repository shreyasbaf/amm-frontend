import styled from "styled-components"

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
