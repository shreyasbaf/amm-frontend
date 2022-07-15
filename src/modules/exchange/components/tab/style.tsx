import styled, { keyframes } from "styled-components"
import { colors } from "../../../../styles/theme"

export const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
`

interface TabButtonProps {
  active?: boolean
}

const TabAnimation = ({ active }: TabButtonProps) => keyframes``

export const TabButton = styled.button<TabButtonProps>`
  cursor: pointer;
  background-color: ${colors.gray};
  border-radius: 12px 12px 0px 0px;
  width: 12rem;
  margin: 0px 12px;
  position: relative;
  z-index: 1;

  border-bottom: ${(props) => props.active && `2px solid red`};
  /* animation: ${(props) => TabAnimation(props)} 1s;
  animation-fill-mode: forwards; */
`
