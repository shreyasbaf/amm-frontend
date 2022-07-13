import styled, { keyframes } from "styled-components"

export enum Position {
  top,
  bottom,
}

interface InputWrapperProps {
  margin?: string
  switchSwap?: boolean | undefined
  position: Position
}

const MoveTopAnimation = (switchSwap: boolean | undefined) => keyframes`
  0%{
    transform: ${switchSwap ? `translateY(0px)` : `translateY(135px)`} 
  }

  50%{
    opacity: 0.5 ;
  }

  100%{
    transform: ${switchSwap ? `translateY(135px)` : `translateY(0px)`} 
  }
`

const MoveBottomAnimation = (switchSwap: boolean | undefined) => keyframes`
  0%{
    transform: ${switchSwap ? `translateY(0px)` : `translateY(-135px)`} 
  }

  50%{
    opacity: 0.5 ;
  }

  100%{
    transform: ${switchSwap ? `translateY(-135px)` : `translateY(0px)`} 
  }
`

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: ${(props) => props.margin};
  animation: ${(props) =>
      props.switchSwap !== undefined &&
      (props.position === Position.top
        ? MoveTopAnimation(props.switchSwap)
        : MoveBottomAnimation(props.switchSwap))}
    0.5s;
  animation-fill-mode: forwards;
`

interface ArrowContainerProps {
  switchSwap?: boolean
}

const RotateAnimation = (switchSwap: boolean | undefined) => keyframes`
  0%{
    transform: ${switchSwap === false && `rotate(180deg)`} ;    
  }

  100%{
    transform: ${switchSwap && `rotate(180deg)`} ;    
  }
`

export const ArrowContainer = styled.img<ArrowContainerProps>`
  height: 3rem;
  margin: 1rem 0rem;
  cursor: pointer;
  animation: ${(props) => RotateAnimation(props.switchSwap)} 0.5s;
  animation-fill-mode: forwards;
`
