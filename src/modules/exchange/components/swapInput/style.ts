import styled, { keyframes } from "styled-components"
import { colors } from "../../../../styles/theme"

interface InputWrapperProps {
  margin?: string
  switchSwap?: boolean | undefined
  position?: "top" | "bottom"
}

const MoveTopAnimation = (switchSwap: boolean | undefined) => keyframes`
  0%{
    transform: ${switchSwap ? `translateY(0px)` : `translateY(115px)`} 
  }

  50%{
    opacity: 0.5 ;
  }

  100%{
    transform: ${switchSwap ? `translateY(115px)` : `translateY(0px)`} 
  }
`

const MoveBottomAnimation = (switchSwap: boolean | undefined) => keyframes`
  0%{
    transform: ${switchSwap ? `translateY(0px)` : `translateY(-115px)`} 
  }

  50%{
    opacity: 0.5 ;
  }

  100%{
    transform: ${switchSwap ? `translateY(-115px)` : `translateY(0px)`} 
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
      (props.position === "top"
        ? MoveTopAnimation(props.switchSwap)
        : MoveBottomAnimation(props.switchSwap))}
    0.5s;
  animation-fill-mode: forwards;
`

interface BalanceWrapperProps {
  account?: boolean
}

const MoveUpAnimation = ({ account }: BalanceWrapperProps) => keyframes`
  0%{
    transform: ${account ? "translateY(0px)" : "translateY(-40px)"} ;
    opacity: ${account ? 0 : 1};    
  };
  
  100%{
    transform: ${account ? `translateY(-40px)` : `translateY(0px)`};
    opacity: ${account ? 1 : 0};
  };
`

export const BalanceWrapper = styled.div<BalanceWrapperProps>`
  position: absolute;
  right: 0px;
  white-space: nowrap;
  color: ${colors.white};
  animation: ${(props) => MoveUpAnimation(props)} 0.5s ease-out;
  animation-fill-mode: forwards;
`
