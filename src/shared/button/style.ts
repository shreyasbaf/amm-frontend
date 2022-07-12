import styled, { css, keyframes } from "styled-components"
import { colors } from "../../styles/theme"

const animateLoader = keyframes`
from {transform : rotate(0deg)}
to {transform : rotate(360deg)}
`

// here in the svg you can add the svg according and can animate
const svgCSS = css`
  font-size: 26px;
  animation: ${animateLoader} linear 2s infinite;
`
const buttonStyles = css`
  outline: none;
  border-radius: 8px;

  color: rgb(0 0 0 / 90%);
  border: 1px solid rgb(0 0 0 / 90%);
  font-size: 1em;
  cursor: pointer;
  transition: all linear 0.3s;
  background-color: #ffff;
  :hover,
  :focus {
    box-shadow: 0px 0px 5px rgb(0 0 0 / 90%);
  }
  svg {
    ${svgCSS}
  }
`
const error = css`
  background: red;
  color: white;
  transition: all linear 0.3s;
  border: 1px solid red;
  :hover,
  :focus {
    box-shadow: 0px 0px 5px red;
  }
`
const success = css`
  background: green;
  color: white;
  transition: all linear 0.3s;
  border: 1px solid green;
  :hover,
  :focus {
    box-shadow: 0px 0px 5px green;
  }
`
const warning = css`
  background: yellow;
  color: black;
  transition: all linear 0.3s;
  border: 1px solid yellow;
  :hover,
  :focus {
    box-shadow: 0px 0px 5px yellow;
  }
`
const disabled = css`
  pointer-events: none;
  cursor: not-allowed;
`

/* export const ButtonWrapper = styled.button<any>`
  ${buttonStyles}
  ${(props) =>
    (props.btnType == "error" && error) ||
    (props.btnType == "success" && success) ||
    (props.btnType == "warning" && warning) ||
    (props.btnType == "disabled" && disabled)}
` */

export const ButtonAlignment = styled.div<any>`
  display: flex;
  justify-content: ${(props) =>
    (props.align == "center" && "center") ||
    (props.align == "start" && "flex-start") ||
    (props.align == "end" && "flex-end")};
`

export enum buttonTypes {
  error,
  success,
  warning,
  disabled,
}

interface ButtonWrapperProps {
  background?: string
  textColor?: string
  btnType?: buttonTypes
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.background || colors.navy};
  color: ${(props) => props.textColor || colors.white};
  cursor: pointer;
  padding: 0.8rem;
  ${(props) =>
    (props.btnType == buttonTypes.error && error) ||
    (props.btnType == buttonTypes.success && success) ||
    (props.btnType == buttonTypes.warning && warning) ||
    (props.btnType == buttonTypes.disabled && disabled)}
`
