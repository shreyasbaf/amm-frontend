import styled, { keyframes } from "styled-components"

interface InputWrapperProps {
  margin?: string
}

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: ${(props) => props.margin};
`

interface ArrowContainerProps {
  rotate?: boolean
}

const RotateAnimation = keyframes`
  50%{
    transform: rotate(180deg);    
  }
`

export const ArrowContainer = styled.img<ArrowContainerProps>`
  height: 3rem;
  margin: 1rem 0rem;
  cursor: pointer;
  animation: ${RotateAnimation} 3s;
  animation-fill-mode: forwards;
  /* animation-duration: 5s; */
`
